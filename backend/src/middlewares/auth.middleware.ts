import { Request, Response, NextFunction } from 'express';
import { fromNodeHeaders } from 'better-auth/node';
import { auth, AuthSession } from '../lib/auth.js';

// Estende a tipagem do Express Request para incluir user e session
declare global {
  namespace Express {
    interface Request {
      user?: AuthSession['user'];
      session?: AuthSession['session'];
    }
  }
}

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  try {
    // O plugin bearer() faz com que auth.api.getSession leia automaticamente o header Authorization: Bearer <token>
    const sessionData = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!sessionData || !sessionData.session) {
      res.status(401).json({
        error: 'Não autorizado. Token Bearer ausente ou inválido.',
      });
      return;
    }

    req.user = sessionData.user;
    req.session = sessionData.session;
    next();
  } catch (error) {
    res.status(401).json({
      error: 'Falha ao validar sessão de autenticação.',
    });
  }
}
