import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { prisma } from '../src/lib/prisma.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const initialVolunteers = [
  {
    id: 'vol-1',
    name: 'Joyce Lopes',
    role: 'Coordenadora e Diretora',
    desc: 'Formada em Ciência e Tecnologia\nEstudante de Química e Neurociência na UFABC',
    image: 'voluntarios/joyce-lopes.jpeg',
    badgeColor: 'bg-green-600',
    textColor: 'text-orange-500',
    active: true,
    order: 1,
  },
  {
    id: 'vol-2',
    name: 'Karine Santos',
    role: 'Medicina',
    desc: '',
    image: 'voluntarios/karine-santos.jpeg',
    badgeColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    active: true,
    order: 2,
  },
  {
    id: 'vol-3',
    name: 'Ana Luiza',
    role: '',
    desc: '',
    image: 'voluntarios/ana-luiza.jpeg',
    badgeColor: 'bg-amber-800',
    textColor: 'text-amber-800',
    active: true,
    order: 3,
  },
  {
    id: 'vol-4',
    name: 'Davi Gonçalves',
    role: '',
    desc: '',
    image: 'voluntarios/davi-goncalves.jpeg',
    badgeColor: 'bg-green-600',
    textColor: 'text-orange-500',
    active: true,
    order: 4,
  },
  {
    id: 'vol-5',
    name: 'Diogo Alexandre',
    role: '',
    desc: '',
    image: 'voluntarios/diogo-alexandre.jpeg',
    badgeColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    active: true,
    order: 5,
  },
  {
    id: 'vol-6',
    name: 'Giovanna Goulart',
    role: '',
    desc: '',
    image: 'voluntarios/giovanna-goulart.jpeg',
    badgeColor: 'bg-amber-800',
    textColor: 'text-orange-500',
    active: true,
    order: 6,
  },
  {
    id: 'vol-7',
    name: 'Giovanna Mariá',
    role: '',
    desc: '',
    image: 'voluntarios/giovanna-maria.jpeg',
    badgeColor: 'bg-green-600',
    textColor: 'text-orange-500',
    active: true,
    order: 7,
  },
  {
    id: 'vol-8',
    name: 'Giovanna Ribeiro',
    role: '',
    desc: '',
    image: 'voluntarios/giovanna-ribeiro.jpeg',
    badgeColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    active: true,
    order: 8,
  },
  {
    id: 'vol-9',
    name: 'Giovanna Souza',
    role: '',
    desc: '',
    image: 'voluntarios/giovanna-souza.jpeg',
    badgeColor: 'bg-amber-800',
    textColor: 'text-orange-500',
    active: true,
    order: 9,
  },
  {
    id: 'vol-10',
    name: 'Júlia Oliveira Gonçalves',
    role: '',
    desc: '',
    image: 'voluntarios/julia-oliveira-goncalves.jpeg',
    badgeColor: 'bg-green-600',
    textColor: 'text-orange-500',
    active: true,
    order: 10,
  },
  {
    id: 'vol-11',
    name: 'Juliane Gabriele da Silva',
    role: '',
    desc: '',
    image: 'voluntarios/juliane-gabriele-da-silva.jpeg',
    badgeColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    active: true,
    order: 11,
  },
  {
    id: 'vol-12',
    name: 'Vitória Varanda',
    role: '',
    desc: '',
    image: 'voluntarios/vitoria-varanda.jpeg',
    badgeColor: 'bg-amber-800',
    textColor: 'text-orange-500',
    active: true,
    order: 12,
  },
  {
    id: 'vol-13',
    name: 'Wellington Fonseca',
    role: '',
    desc: '',
    image: 'voluntarios/wellington-fonseca.jpeg',
    badgeColor: 'bg-green-600',
    textColor: 'text-orange-500',
    active: true,
    order: 13,
  },
];

// RFC-4180 CSV parser (suporta quebras de linha dentro de aspas)
function parseCSV(content: string): Record<string, string>[] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        currentField += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        currentRow.push(currentField);
        currentField = '';
      } else if (char === '\r' && nextChar === '\n') {
        currentRow.push(currentField);
        rows.push(currentRow);
        currentRow = [];
        currentField = '';
        i++;
      } else if (char === '\n') {
        currentRow.push(currentField);
        rows.push(currentRow);
        currentRow = [];
        currentField = '';
      } else {
        currentField += char;
      }
    }
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  if (rows.length === 0) return [];

  const headers = rows[0].map((h) => h.trim());
  const records: Record<string, string>[] = [];

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (row.length === 1 && row[0].trim() === '') continue;
    const obj: Record<string, string> = {};
    for (let c = 0; c < headers.length; c++) {
      obj[headers[c]] = (row[c] ?? '').trim();
    }
    records.push(obj);
  }

  return records;
}

function cleanText(val?: string): string | null {
  if (!val) return null;
  let cleaned = val.trim();
  if (cleaned.startsWith("'-")) {
    cleaned = cleaned.replace(/^'-\s*/, '-').trim();
  }
  if (cleaned === '-' || cleaned === "'-" || cleaned === '') {
    return null;
  }
  return cleaned;
}

function parseCoordinate(val?: string): number | null {
  if (!val) return null;
  const cleaned = val.replace(/^'/, '').trim();
  if (!cleaned || cleaned === '-') return null;

  let num = Number(cleaned);
  if (Number.isNaN(num)) return null;

  // Corrige coordenadas exportadas sem ponto decimal (ex: -23710718161455300 -> -23.7107181614553)
  while (Math.abs(num) > 180) {
    num = num / 10;
  }
  return num;
}

async function seedVolunteers() {
  console.log('🌱 Sincronizando voluntários...');
  for (const volunteer of initialVolunteers) {
    await prisma.volunteer.upsert({
      where: { id: volunteer.id },
      update: {
        name: volunteer.name,
        role: volunteer.role,
        desc: volunteer.desc,
        image: volunteer.image,
        badgeColor: volunteer.badgeColor,
        textColor: volunteer.textColor,
        active: volunteer.active,
        order: volunteer.order,
      },
      create: {
        id: volunteer.id,
        name: volunteer.name,
        role: volunteer.role,
        desc: volunteer.desc,
        image: volunteer.image,
        badgeColor: volunteer.badgeColor,
        textColor: volunteer.textColor,
        active: volunteer.active,
        order: volunteer.order,
      },
    });
  }
  console.log(`✅ ${initialVolunteers.length} voluntários sincronizados!`);
}

async function seedCursinhos() {
  console.log('🌱 Sincronizando cursinhos a partir dos CSVs...');

  const csvDir = path.join(__dirname, 'data', 'cursinhos');
  const files: { file: string; category: string }[] = [
    { file: 'Cursinhos+Gratuitos.csv', category: 'GRATUITO' },
    { file: 'Cursinhos+Com+Bolsa.csv', category: 'COM_BOLSA' },
    { file: 'Cursinhos+Acessíveis.csv', category: 'ACESSIVEL' },
  ];

  let totalInserted = 0;

  for (const { file, category } of files) {
    const filePath = path.join(csvDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const rows = parseCSV(content);

    const dataToInsert = rows
      .filter((row) => row['Nome do Cursinho'] && row['ID'])
      .map((row) => ({
        id: row['ID'],
        category,
        name: row['Nome do Cursinho'].trim(),
        address: cleanText(row['Endereço Completo']),
        region: cleanText(row['Região']),
        website: cleanText(row['Site Oficial']),
        facebook: cleanText(row['Página no Facebook']),
        instagram: cleanText(row['Página do Instagram']),
        schedule: cleanText(row['Horário das Aulas']),
        selectionProcess: cleanText(row['Processo Seletivo']),
        remoteModality: cleanText(row['Modalidade Remota']),
        inPersonSlots: cleanText(row['Vagas Disponíveis Presencial']),
        remoteSlots: cleanText(row['Vagas Disponíveis Remoto']),
        contacts: cleanText(row['Contatos']),
        email: cleanText(row['E-mail'] || row[' E-mail']),
        latitude: parseCoordinate(row['Latitude']),
        longitude: parseCoordinate(row['Longitude']),
        notes: cleanText(row['Observações']),
      }));

    await prisma.cursinho.deleteMany({ where: { category } });
    await prisma.cursinho.createMany({
      data: dataToInsert,
      skipDuplicates: true,
    });

    totalInserted += dataToInsert.length;
    console.log(`  📌 ${file} (${category}): ${dataToInsert.length} cursinhos sincronizados.`);
  }

  console.log(`✅ Total de ${totalInserted} cursinhos cadastrados no banco na nuvem!`);
}

async function main() {
  await seedVolunteers();
  await seedCursinhos();
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
