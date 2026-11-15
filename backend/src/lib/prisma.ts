import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config({ override: true });

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  prismaUrl: string | undefined;
};

if (
  !globalForPrisma.prisma ||
  globalForPrisma.prismaUrl !== process.env.DATABASE_URL
) {
  globalForPrisma.prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });
  globalForPrisma.prismaUrl = process.env.DATABASE_URL;
}

export const prisma = globalForPrisma.prisma;
