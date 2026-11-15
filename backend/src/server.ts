import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth.js';
import { routes } from './routes/index.js';

const app = express();
const PORT = Number(process.env.PORT) || 3333;

// Configuração de CORS para API 100% desacoplada
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

/**
 * IMPORTANTE: O handler do Better Auth deve ser registrado ANTES do `express.json()`,
 * pois o Better Auth faz o parse do body internamente nas rotas `/api/auth/*`.
 */
app.all('/api/auth/*', toNodeHandler(auth));

// Parser JSON para as demais rotas da API REST
app.use(express.json());

// Rotas principais da aplicação
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`🚀 [Semeando Educação API] rodando em http://localhost:${PORT}`);
});
