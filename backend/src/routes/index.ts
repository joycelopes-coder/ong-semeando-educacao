import crypto from 'crypto';
import { Router, Request, Response } from 'express';
import { requireAuth } from '../middlewares/auth.middleware.js';
import { prisma } from '../lib/prisma.js';

export const routes = Router();

let siteEventTableReady = false;
async function ensureSiteEventTable() {
  if (siteEventTableReady) return;
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "site_event" (
      "id" TEXT NOT NULL,
      "type" TEXT NOT NULL,
      "path" TEXT NOT NULL,
      "target" TEXT,
      "visitorId" TEXT,
      "device" TEXT,
      "referrer" TEXT,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "site_event_pkey" PRIMARY KEY ("id")
    );
  `);
  siteEventTableReady = true;
}

// Rota pública: Healthcheck
routes.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Semeando Educação API',
    timestamp: new Date().toISOString(),
  });
});

// Rota pública: Listar voluntários direto do banco na nuvem
// Por padrão retorna apenas ativos (active = true); com ?all=true retorna todos (ativos e inativos)
routes.get('/volunteers', async (req: Request, res: Response) => {
  try {
    const showAll = req.query.all === 'true';
    const onlyInactive = req.query.active === 'false';

    if ((prisma as any).volunteer) {
      const where = showAll
        ? {}
        : { active: onlyInactive ? false : true };

      const volunteers = await prisma.volunteer.findMany({
        where,
        orderBy: { order: 'asc' },
      });
      res.json(volunteers);
      return;
    }

    const sql = showAll
      ? `SELECT * FROM "volunteer" ORDER BY "order" ASC`
      : `SELECT * FROM "volunteer" WHERE "active" = ${onlyInactive ? 'false' : 'true'} ORDER BY "order" ASC`;

    const volunteers = await prisma.$queryRawUnsafe(sql);
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

// Listar inscritos da Newsletter para o Dashboard
routes.get('/newsletter/subscribers', async (_req: Request, res: Response) => {
  try {
    const subscribers = await prisma.newsletterSubscriber.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(subscribers);
  } catch (error) {
    console.error('Erro ao buscar inscritos da newsletter:', error);
    res.status(500).json({ error: 'Erro interno ao buscar inscritos.' });
  }
});

// Registrar evento de acesso/interação de visitante no site
routes.post('/analytics/track', async (req: Request, res: Response) => {
  try {
    await ensureSiteEventTable();

    const { type, path, target, visitorId, device, referrer } = req.body || {};
    if (!type || !path) {
      res.status(400).json({ error: 'Campos type e path são obrigatórios.' });
      return;
    }

    const id = crypto.randomUUID();
    await prisma.$executeRawUnsafe(
      `INSERT INTO "site_event" ("id", "type", "path", "target", "visitorId", "device", "referrer", "createdAt")
       VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP)`,
      id,
      String(type),
      String(path),
      target ? String(target) : null,
      visitorId ? String(visitorId) : null,
      device ? String(device) : null,
      referrer ? String(referrer) : null
    );

    res.status(201).json({ ok: true });
  } catch (error) {
    console.error('Erro ao registrar analytics:', error);
    res.status(500).json({ error: 'Erro interno ao registrar evento.' });
  }
});

// Resumo de métricas de visitantes para o Dashboard Admin
routes.get('/analytics/summary', async (_req: Request, res: Response) => {
  try {
    await ensureSiteEventTable();

    const events = (await prisma.$queryRawUnsafe(
      `SELECT "id", "type", "path", "target", "visitorId", "device", "referrer", "createdAt"
       FROM "site_event"
       ORDER BY "createdAt" DESC
       LIMIT 5000`
    )) as Array<{
      id: string;
      type: string;
      path: string;
      target: string | null;
      visitorId: string | null;
      device: string | null;
      referrer: string | null;
      createdAt: Date | string;
    }>;

    const pageViews = events.filter((e) => e.type === 'PAGE_VIEW');
    const pinClicks = events.filter((e) => e.type === 'MAP_PIN_CLICK');
    const mapSearches = events.filter((e) => e.type === 'MAP_SEARCH');
    const mapFilters = events.filter((e) => e.type === 'MAP_FILTER');

    const uniqueVisitorSet = new Set(
      events.map((e) => e.visitorId).filter(Boolean)
    );

    const now = new Date();
    const todayKey = now.toISOString().slice(0, 10);
    const todayViews = pageViews.filter((e) => {
      const d = new Date(e.createdAt).toISOString().slice(0, 10);
      return d === todayKey;
    }).length;

    const mobileViews = pageViews.filter((e) => e.device === 'MOBILE').length;
    const desktopViews = pageViews.filter((e) => e.device !== 'MOBILE').length;

    // Últimos 7 dias de acessos
    const viewsByDay: Array<{ label: string; value: number }> = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(now.getDate() - i);
      const isoDay = date.toISOString().slice(0, 10);
      const label = date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      });
      const count = pageViews.filter(
        (e) => new Date(e.createdAt).toISOString().slice(0, 10) === isoDay
      ).length;
      viewsByDay.push({ label, value: count });
    }

    // Top 6 páginas mais acessadas
    const pageCounts: Record<string, number> = {};
    pageViews.forEach((e) => {
      const p = e.path || '/';
      pageCounts[p] = (pageCounts[p] || 0) + 1;
    });
    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([pathLabel, value]) => ({ label: pathLabel, value }));

    // Top 5 cursinhos mais clicados no mapa
    const cursinhoCounts: Record<string, number> = {};
    pinClicks.forEach((e) => {
      if (!e.target) return;
      cursinhoCounts[e.target] = (cursinhoCounts[e.target] || 0) + 1;
    });
    const topCursinhos = Object.entries(cursinhoCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([label, value]) => ({ label, value }));

    // Últimas buscas de bairro/CEP no mapa
    const recentSearches = mapSearches
      .filter((e) => e.target)
      .slice(0, 6)
      .map((e) => ({
        term: e.target as string,
        createdAt: e.createdAt,
      }));

    // Filtros de modalidade mais usados
    const filterCounts: Record<string, number> = {};
    mapFilters.forEach((e) => {
      if (!e.target) return;
      filterCounts[e.target] = (filterCounts[e.target] || 0) + 1;
    });
    const topFilters = Object.entries(filterCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([label, value]) => ({ label, value }));

    res.json({
      totalViews: pageViews.length,
      todayViews,
      uniqueVisitors: uniqueVisitorSet.size,
      mobileViews,
      desktopViews,
      totalPinClicks: pinClicks.length,
      totalMapSearches: mapSearches.length,
      viewsByDay,
      topPages,
      topCursinhos,
      recentSearches,
      topFilters,
    });
  } catch (error) {
    console.error('Erro ao buscar resumo de analytics:', error);
    res.status(500).json({ error: 'Erro interno ao buscar analytics.' });
  }
});

// Rota protegida (exige Header -> Authorization: Bearer <token>)
routes.get('/me', requireAuth, (req: Request, res: Response) => {
  res.json({
    user: req.user,
    session: req.session,
  });
});
