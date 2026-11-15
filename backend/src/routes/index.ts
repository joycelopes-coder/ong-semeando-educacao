import { Router, Request, Response } from 'express';
import { requireAuth } from '../middlewares/auth.middleware.js';
import { prisma } from '../lib/prisma.js';

export const routes = Router();

// Rota pública: Healthcheck
routes.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Semeando Educação API',
    timestamp: new Date().toISOString(),
  });
});

// Rota pública: Listar voluntários ativos direto do banco na nuvem
routes.get('/volunteers', async (_req: Request, res: Response) => {
  try {
    if ((prisma as any).volunteer) {
      const volunteers = await prisma.volunteer.findMany({
        where: { active: true },
        orderBy: { order: 'asc' },
      });
      res.json(volunteers);
      return;
    }

    const volunteers = await prisma.$queryRawUnsafe(
      `SELECT * FROM "volunteer" WHERE "active" = true ORDER BY "order" ASC`
    );
    res.json(volunteers);
  } catch (error) {
    console.error('Erro ao buscar voluntários:', error);
    res.status(500).json({ error: 'Erro interno ao buscar voluntários.' });
  }
});

// Rota pública: Listar cursinhos cadastrados no banco na nuvem
routes.get('/cursinhos', async (req: Request, res: Response) => {
  try {
    const { category, q } = req.query;

    if ((prisma as any).cursinho) {
      const where: Record<string, unknown> = {};
      if (typeof category === 'string' && category.trim() !== '') {
        where.category = category.trim().toUpperCase();
      }
      if (typeof q === 'string' && q.trim() !== '') {
        const search = q.trim();
        where.OR = [
          { name: { contains: search, mode: 'insensitive' } },
          { region: { contains: search, mode: 'insensitive' } },
          { address: { contains: search, mode: 'insensitive' } },
        ];
      }

      const cursinhos = await prisma.cursinho.findMany({
        where,
        orderBy: { name: 'asc' },
      });

      res.json(cursinhos);
      return;
    }

    // Fallback via SQL direto caso o processo Node ainda esteja com o PrismaClient antigo em memória
    const cursinhos = await prisma.$queryRawUnsafe(
      `SELECT * FROM "cursinho" ORDER BY "name" ASC`
    );
    res.json(cursinhos);
  } catch (error) {
    console.error('Erro ao buscar cursinhos:', error);
    res.status(500).json({ error: 'Erro interno ao buscar cursinhos.' });
  }
});

// Rota pública: Inscrição na Newsletter (Footer)
routes.post('/newsletter/subscribe', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      res.status(400).json({ error: 'E-mail é obrigatório.' });
      return;
    }

    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: { active: true },
      create: { email },
    });

    res.status(201).json({
      message: 'Inscrição realizada com sucesso!',
      subscriber,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno ao processar inscrição.' });
  }
});

// Rota protegida (exige Header -> Authorization: Bearer <token>)
routes.get('/me', requireAuth, (req: Request, res: Response) => {
  res.json({
    user: req.user,
    session: req.session,
  });
});
