import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart2,
  MapPin,
  Users,
  GraduationCap,
  Mail,
  Newspaper,
  Settings,
  HelpCircle,
  PanelLeftClose,
  PanelLeftOpen,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  School,
  Eye,
  Smartphone,
  MousePointerClick,
  Search,
  RefreshCw,
} from 'lucide-react'

type AdminTabId =
  | 'dashboard'
  | 'cursinhos'
  | 'voluntarios'
  | 'palestras'
  | 'newsletter'
  | 'midia'
  | 'configuracoes'
  | 'ajuda'

interface NavItem {
  id: AdminTabId
  label: string
  icon: React.ElementType
}

interface CursinhoItem {
  id: string
  category: 'GRATUITO' | 'COM_BOLSA' | 'ACESSIVEL' | string
  name: string
  region?: string | null
  address?: string | null
  latitude?: number | null
  longitude?: number | null
}

interface VolunteerItem {
  id: string
  name: string
  active: boolean
}

interface SubscriberItem {
  id: string
  email: string
  active: boolean
  createdAt: string
}

interface AnalyticsSummary {
  totalViews: number
  todayViews: number
  uniqueVisitors: number
  mobileViews: number
  desktopViews: number
  totalPinClicks: number
  totalMapSearches: number
  viewsByDay: Array<{ label: string; value: number }>
  topPages: Array<{ label: string; value: number }>
  topCursinhos: Array<{ label: string; value: number }>
  recentSearches: Array<{ term: string; createdAt: string }>
  topFilters: Array<{ label: string; value: number }>
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart2 },
  { id: 'cursinhos', label: 'Cursinhos', icon: MapPin },
  { id: 'voluntarios', label: 'Voluntários', icon: Users },
  { id: 'palestras', label: 'Palestras', icon: GraduationCap },
  { id: 'newsletter', label: 'Newsletter', icon: Mail },
  { id: 'midia', label: 'Blog & Mídia', icon: Newspaper },
  { id: 'configuracoes', label: 'Configurações', icon: Settings },
  { id: 'ajuda', label: 'Ajuda', icon: HelpCircle },
]

// Dados consolidados das 30 palestras realizadas pela ONG (de Palestras.tsx)
const PALESTRAS_STATS = {
  totalPalestras: 30,
  escolas: 21,
  cursinhos: 9,
  totalImpactados: 4327,
  porSemestre: [
    { label: '2016.2', value: 220 },
    { label: '2017.1', value: 1853 },
    { label: '2017.2', value: 685 },
    { label: '2018.1', value: 115 },
    { label: '2018.2', value: 1200 },
    { label: '2019', value: 685 },
  ],
  acumuladoAnual: [
    { label: 'Out/16', value: 220 },
    { label: 'Jun/17', value: 2073 },
    { label: 'Out/17', value: 2758 },
    { label: 'Abr/18', value: 2873 },
    { label: 'Set/18', value: 4073 },
    { label: 'Nov/19', value: 4327 },
  ],
  porCidade: [
    { label: 'Mauá', value: 1740, color: '#2b7fff' },
    { label: 'São Paulo', value: 1142, color: '#16b364' },
    { label: 'Ferraz', value: 480, color: '#ea580c' },
    { label: 'S. Bernardo', value: 377, color: '#eab308' },
    { label: 'Diadema', value: 336, color: '#ec4899' },
    { label: 'Guarulhos', value: 200, color: '#a855f7' },
  ],
}

// Gera path SVG suave (Catmull-Rom / Cubic Bezier) para o gráfico de área
function buildSmoothAreaPaths(
  points: { x: number; y: number }[],
  baselineY: number
) {
  if (points.length === 0) return { linePath: '', areaPath: '' }
  if (points.length === 1) {
    return {
      linePath: `M ${points[0].x} ${points[0].y}`,
      areaPath: `M ${points[0].x} ${baselineY} L ${points[0].x} ${points[0].y} L ${points[0].x} ${baselineY} Z`,
    }
  }

  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1]

    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`
  }

  const last = points[points.length - 1]
  const first = points[0]
  const areaPath = `${d} L ${last.x.toFixed(1)} ${baselineY} L ${first.x.toFixed(1)} ${baselineY} Z`

  return { linePath: d, areaPath }
}

export function Admin() {
  const [activeTab, setActiveTab] = useState<AdminTabId>('dashboard')
  const [collapsed, setCollapsed] = useState(false)

  // Dados reais vindos da API
  const [cursinhos, setCursinhos] = useState<CursinhoItem[]>([])
  const [volunteers, setVolunteers] = useState<VolunteerItem[]>([])
  const [subscribers, setSubscribers] = useState<SubscriberItem[]>([])
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  // Seletores dos 2 gráficos da aba Dashboard
  const [areaMode, setAreaMode] = useState<
    'acumulado' | 'semestre' | 'acessos7d'
  >('semestre')
  const [barMode, setBarMode] = useState<'regiao' | 'cidade' | 'paginas'>(
    'regiao'
  )
  const [hoveredAreaIdx, setHoveredAreaIdx] = useState<number | null>(null)

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333'

  const fetchDashboardData = async (isManualRefresh = false) => {
    try {
      if (isManualRefresh) setRefreshing(true)
      const [cursinhosRes, volunteersRes, subscribersRes, analyticsRes] =
        await Promise.allSettled([
          fetch(`${apiUrl}/api/cursinhos`),
          fetch(`${apiUrl}/api/volunteers?all=true`),
          fetch(`${apiUrl}/api/newsletter/subscribers`),
          fetch(`${apiUrl}/api/analytics/summary`),
        ])

      if (cursinhosRes.status === 'fulfilled' && cursinhosRes.value.ok) {
        const data = await cursinhosRes.value.json()
        if (Array.isArray(data)) setCursinhos(data)
      }

      if (volunteersRes.status === 'fulfilled' && volunteersRes.value.ok) {
        const data = await volunteersRes.value.json()
        if (Array.isArray(data)) setVolunteers(data)
      }

      if (subscribersRes.status === 'fulfilled' && subscribersRes.value.ok) {
        const data = await subscribersRes.value.json()
        if (Array.isArray(data)) setSubscribers(data)
      }

      if (analyticsRes.status === 'fulfilled' && analyticsRes.value.ok) {
        const data = await analyticsRes.value.json()
        if (data && typeof data === 'object') setAnalytics(data)
      }
    } catch (err) {
      console.error('Erro ao carregar métricas do dashboard:', err)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [apiUrl])

  // Cálculos reais dos cursinhos do banco
  const cursinhoStats = useMemo(() => {
    const total = cursinhos.length
    const gratuitos = cursinhos.filter((c) => c.category === 'GRATUITO').length
    const comBolsa = cursinhos.filter((c) => c.category === 'COM_BOLSA').length
    const acessiveis = cursinhos.filter(
      (c) => c.category === 'ACESSIVEL'
    ).length

    // Agrupamento real por região a partir dos 192 cursinhos do banco
    const regionCounts = {
      Capital: 0,
      'Zona Sul/Oeste': 0,
      'Zona Leste/Norte': 0,
      'Grande ABC': 0,
      'Grande SP': 0,
      Interior: 0,
    }

    if (cursinhos.length > 0) {
      cursinhos.forEach((c) => {
        const text = `${c.region || ''} ${c.address || ''}`.toLowerCase()
        if (
          text.includes('santo andré') ||
          text.includes('são bernardo') ||
          text.includes('são caetano') ||
          text.includes('diadema') ||
          text.includes('mauá') ||
          text.includes('ribeirão pires') ||
          text.includes('abc')
        ) {
          regionCounts['Grande ABC']++
        } else if (
          text.includes('zona leste') ||
          text.includes('zona norte') ||
          text.includes('itaquera') ||
          text.includes('tatuapé') ||
          text.includes('santana')
        ) {
          regionCounts['Zona Leste/Norte']++
        } else if (
          text.includes('zona sul') ||
          text.includes('zona oeste') ||
          text.includes('butantã') ||
          text.includes('pinheiros') ||
          text.includes('santo amaro')
        ) {
          regionCounts['Zona Sul/Oeste']++
        } else if (
          text.includes('guarulhos') ||
          text.includes('osasco') ||
          text.includes('mogi') ||
          text.includes('suzano') ||
          text.includes('cotia') ||
          text.includes('taboão') ||
          text.includes('barueri')
        ) {
          regionCounts['Grande SP']++
        } else if (
          text.includes('são paulo') ||
          text.includes('centro') ||
          text.includes('bela vista') ||
          text.includes('liberdade')
        ) {
          regionCounts.Capital++
        } else {
          regionCounts.Interior++
        }
      })
    } else {
      regionCounts.Capital = 48
      regionCounts['Zona Sul/Oeste'] = 39
      regionCounts['Zona Leste/Norte'] = 34
      regionCounts['Grande ABC'] = 22
      regionCounts['Grande SP'] = 25
      regionCounts.Interior = 24
    }

    const barsRegiao = [
      { label: 'Centro / SP', value: regionCounts.Capital, color: '#2b7fff' },
      {
        label: 'Sul & Oeste',
        value: regionCounts['Zona Sul/Oeste'],
        color: '#16b364',
      },
      {
        label: 'Leste & Norte',
        value: regionCounts['Zona Leste/Norte'],
        color: '#ea580c',
      },
      {
        label: 'Grande SP',
        value: regionCounts['Grande SP'],
        color: '#eab308',
      },
      {
        label: 'Grande ABC',
        value: regionCounts['Grande ABC'],
        color: '#ec4899',
      },
      { label: 'Interior', value: regionCounts.Interior, color: '#a855f7' },
    ]

    return { total, gratuitos, comBolsa, acessiveis, barsRegiao }
  }, [cursinhos])

  const activeVolunteersCount = useMemo(
    () => volunteers.filter((v) => v.active).length,
    [volunteers]
  )
  const inactiveVolunteersCount = useMemo(
    () => volunteers.filter((v) => !v.active).length,
    [volunteers]
  )
  const subscribersCount = subscribers.length

  const currentTab =
    navItems.find((item) => item.id === activeTab) || navItems[0]

  // Dados ativos do Gráfico 1 (Área Suave)
  const areaSeries = useMemo(() => {
    if (areaMode === 'acessos7d') {
      return analytics?.viewsByDay && analytics.viewsByDay.length > 0
        ? analytics.viewsByDay
        : [
            { label: 'D-6', value: 0 },
            { label: 'D-5', value: 0 },
            { label: 'D-4', value: 0 },
            { label: 'D-3', value: 0 },
            { label: 'D-2', value: 0 },
            { label: 'Ontem', value: 0 },
            { label: 'Hoje', value: 0 },
          ]
    }
    return areaMode === 'semestre'
      ? PALESTRAS_STATS.porSemestre
      : PALESTRAS_STATS.acumuladoAnual
  }, [areaMode, analytics])

  const areaMax = useMemo(() => {
    const maxVal = Math.max(...areaSeries.map((d) => d.value), 10)
    if (areaMode === 'acessos7d') return Math.max(maxVal + 5, 10)
    return areaMode === 'semestre' ? 2000 : 4500
  }, [areaSeries, areaMode])

  const svgWidth = 640
  const svgHeight = 250
  const padLeft = 48
  const padRight = 24
  const padTop = 20
  const padBottom = 36
  const plotWidth = svgWidth - padLeft - padRight
  const plotHeight = svgHeight - padTop - padBottom
  const baselineY = padTop + plotHeight

  const chartPoints = useMemo(() => {
    return areaSeries.map((item, idx) => {
      const x =
        padLeft +
        (areaSeries.length > 1
          ? (idx / (areaSeries.length - 1)) * plotWidth
          : plotWidth / 2)
      const ratio = Math.min(1, Math.max(0, item.value / areaMax))
      const y = padTop + plotHeight * (1 - ratio)
      return { x, y, label: item.label, value: item.value }
    })
  }, [areaSeries, areaMax, plotWidth, plotHeight])

  const { linePath, areaPath } = useMemo(
    () => buildSmoothAreaPaths(chartPoints, baselineY),
    [chartPoints, baselineY]
  )

  // Dados ativos do Gráfico 2 (Barras Coloridas)
  const barPalette = [
    '#2b7fff',
    '#16b364',
    '#ea580c',
    '#eab308',
    '#ec4899',
    '#a855f7',
  ]

  const barSeries = useMemo(() => {
    if (barMode === 'paginas') {
      const pages = analytics?.topPages || []
      if (pages.length === 0) {
        return [{ label: 'Sem acessos', value: 0, color: '#2b7fff' }]
      }
      return pages.map((p, idx) => ({
        label: p.label === '/' ? '/início' : p.label.replace('/universidades/', '/'),
        value: p.value,
        color: barPalette[idx % barPalette.length],
      }))
    }
    return barMode === 'regiao'
      ? cursinhoStats.barsRegiao
      : PALESTRAS_STATS.porCidade
  }, [barMode, cursinhoStats.barsRegiao, analytics])

  const barMax = useMemo(
    () => Math.max(...barSeries.map((d) => d.value), 5),
    [barSeries]
  )

  return (
    <div className="min-h-screen w-full bg-[#090a0d] text-zinc-100 flex font-sans antialiased selection:bg-emerald-600 selection:text-white">
      {/* Aside Minimalista inspirado na referência */}
      <aside
        className={`${
          collapsed ? 'w-[76px]' : 'w-[250px]'
        } shrink-0 bg-[#111217] border-r border-white/[0.07] flex flex-col justify-between transition-all duration-200 select-none`}
      >
        <div>
          {/* Topo do Aside: Marca espaçada + Botão de recolher */}
          <div
            className={`h-20 flex items-center ${
              collapsed ? 'justify-center px-3' : 'justify-between px-6'
            }`}
          >
            {!collapsed && (
              <span className="text-xs font-bold tracking-[0.32em] text-zinc-200 uppercase truncate">
                Semeando
              </span>
            )}

            <button
              type="button"
              onClick={() => setCollapsed((prev) => !prev)}
              title={collapsed ? 'Expandir menu' : 'Recolher menu'}
              className="w-7 h-7 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100 flex items-center justify-center transition-colors"
            >
              {collapsed ? (
                <PanelLeftOpen size={14} />
              ) : (
                <PanelLeftClose size={14} />
              )}
            </button>
          </div>

          {/* Lista de Navegação das Abas */}
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  title={collapsed ? item.label : undefined}
                  className={`w-full flex items-center ${
                    collapsed ? 'justify-center px-0' : 'px-3.5'
                  } py-2.5 rounded-lg text-sm transition-all ${
                    isActive
                      ? 'bg-[#224289] text-white font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] font-medium'
                  }`}
                >
                  <Icon
                    size={18}
                    className={`shrink-0 ${
                      isActive ? 'text-white' : 'text-zinc-400'
                    }`}
                  />
                  {!collapsed && (
                    <span className="ml-3 truncate">{item.label}</span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Rodapé discreto do Aside para voltar ao site público */}
        <div className="p-3 border-t border-white/[0.06]">
          <Link
            to="/"
            title="Voltar ao site"
            className={`w-full flex items-center ${
              collapsed ? 'justify-center px-0' : 'justify-between px-3.5'
            } py-2.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] transition-colors`}
          >
            {!collapsed && <span>Ver site público</span>}
            <ArrowUpRight size={15} className="shrink-0" />
          </Link>
        </div>
      </aside>

      {/* Área Principal */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#090a0d]">
        {/* Header Superior Minimalista */}
        <header className="h-20 px-8 border-b border-white/[0.07] flex items-center justify-between shrink-0">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {currentTab.label}
          </h1>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => fetchDashboardData(true)}
              disabled={refreshing}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-xs font-medium text-zinc-300 transition-colors"
            >
              <RefreshCw
                size={13}
                className={`text-zinc-400 ${refreshing ? 'animate-spin' : ''}`}
              />
              <span>Atualizar</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ajuda')}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-xs font-medium text-zinc-300 transition-colors"
            >
              <HelpCircle size={14} className="text-zinc-400" />
              <span>Suporte</span>
            </button>
          </div>
        </header>

        {/* Conteúdo da Aba */}
        <main className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'dashboard' ? (
            <div className="max-w-[1440px] mx-auto space-y-6">
              {/* Linha 1: 5 Cards de Métricas Minimalistas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Card 1: Total de Cursinhos */}
                <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl px-6 py-5 flex flex-col justify-between min-h-[146px] hover:border-white/[0.14] transition-colors">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                    <span className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-zinc-400">
                      <MapPin size={12} />
                    </span>
                    <span>Cursinhos mapeados</span>
                  </div>

                  <div className="my-2">
                    <span className="text-2xl xl:text-[26px] font-bold text-white tracking-tight">
                      {loading && cursinhos.length === 0
                        ? '...'
                        : cursinhoStats.total}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500">
                    <span className="text-emerald-400 font-semibold">
                      {cursinhoStats.gratuitos} gratuitos
                    </span>{' '}
                    • {cursinhoStats.comBolsa} bolsa • {cursinhoStats.acessiveis}{' '}
                    acess.
                  </p>
                </div>

                {/* Card 2: Estudantes Impactados */}
                <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl px-6 py-5 flex flex-col justify-between min-h-[146px] hover:border-white/[0.14] transition-colors">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                    <span className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-zinc-400">
                      <Sparkles size={12} />
                    </span>
                    <span>Estudantes impactados</span>
                  </div>

                  <div className="my-2">
                    <span className="text-2xl xl:text-[26px] font-bold text-white tracking-tight">
                      +{PALESTRAS_STATS.totalImpactados.toLocaleString('pt-BR')}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500">
                    <span className="text-emerald-400 font-semibold">+260</span>{' '}
                    nas últimas palestras
                  </p>
                </div>

                {/* Card 3: Palestras Realizadas */}
                <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl px-6 py-5 flex flex-col justify-between min-h-[146px] hover:border-white/[0.14] transition-colors">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                    <span className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-zinc-400">
                      <School size={12} />
                    </span>
                    <span>Palestras realizadas</span>
                  </div>

                  <div className="my-2">
                    <span className="text-2xl xl:text-[26px] font-bold text-white tracking-tight">
                      {PALESTRAS_STATS.totalPalestras}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500">
                    <span className="text-emerald-400 font-semibold">
                      {PALESTRAS_STATS.escolas} escolas
                    </span>{' '}
                    • {PALESTRAS_STATS.cursinhos} cursinhos
                  </p>
                </div>

                {/* Card 4: Voluntários */}
                <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl px-6 py-5 flex flex-col justify-between min-h-[146px] hover:border-white/[0.14] transition-colors">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                    <span className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-zinc-400">
                      <Users size={12} />
                    </span>
                    <span>Voluntários ativos</span>
                  </div>

                  <div className="my-2">
                    <span className="text-2xl xl:text-[26px] font-bold text-white tracking-tight">
                      {loading && volunteers.length === 0
                        ? '...'
                        : activeVolunteersCount}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500">
                    <span className="text-emerald-400 font-semibold">
                      {activeVolunteersCount} ativos
                    </span>{' '}
                    • {inactiveVolunteersCount} inativos ({volunteers.length}{' '}
                    total)
                  </p>
                </div>

                {/* Card 5: Inscritos na Newsletter */}
                <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl px-6 py-5 flex flex-col justify-between min-h-[146px] hover:border-white/[0.14] transition-colors">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                    <span className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-zinc-400">
                      <Mail size={12} />
                    </span>
                    <span>Inscritos Newsletter</span>
                  </div>

                  <div className="my-2">
                    <span className="text-2xl xl:text-[26px] font-bold text-white tracking-tight">
                      {subscribersCount}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500">
                    Base ativa no banco em nuvem
                  </p>
                </div>
              </div>

              {/* Linha 2: 2 Gráficos Grandes lado a lado (Área Suave + Barras Coloridas) */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
                {/* Gráfico Esquerdo: Curva de Área Suave */}
                <div className="xl:col-span-6 bg-[#0c0d12] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <h2 className="text-base font-semibold text-zinc-100">
                      {areaMode === 'acessos7d'
                        ? 'Acessos de Visitantes (7 dias)'
                        : 'Impacto de Estudantes'}
                    </h2>

                    <div className="relative">
                      <select
                        value={areaMode}
                        onChange={(e) =>
                          setAreaMode(
                            e.target.value as
                              | 'acumulado'
                              | 'semestre'
                              | 'acessos7d'
                          )
                        }
                        className="appearance-none bg-[#111319] border border-white/10 hover:border-white/20 text-zinc-300 text-xs font-medium rounded-lg pl-3.5 pr-8 py-2 focus:outline-none cursor-pointer transition-colors"
                      >
                        <option value="semestre">Impacto por semestre</option>
                        <option value="acumulado">Crescimento acumulado</option>
                        <option value="acessos7d">
                          Acessos ao site (últimos 7 dias)
                        </option>
                      </select>
                      <ChevronDown
                        size={14}
                        className="text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* SVG do Gráfico de Área */}
                  <div className="w-full overflow-hidden">
                    <svg
                      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                      className="w-full h-[260px] overflow-visible"
                    >
                      <defs>
                        <linearGradient
                          id="adminAreaGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#2563eb"
                            stopOpacity="0.42"
                          />
                          <stop
                            offset="100%"
                            stopColor="#2563eb"
                            stopOpacity="0.0"
                          />
                        </linearGradient>
                      </defs>

                      {/* Linhas horizontais de grade + Labels do eixo Y */}
                      {[1, 0.75, 0.5, 0.25, 0].map((ratio, idx) => {
                        const y = padTop + plotHeight * (1 - ratio)
                        const val = Math.round(areaMax * ratio)
                        const formatted =
                          val >= 1000
                            ? `${(val / 1000).toFixed(1).replace('.0', '')}K`
                            : `${val}`

                        return (
                          <g key={idx}>
                            <line
                              x1={padLeft}
                              y1={y}
                              x2={svgWidth - padRight}
                              y2={y}
                              stroke="rgba(255,255,255,0.05)"
                              strokeWidth="1"
                            />
                            <text
                              x={padLeft - 12}
                              y={y + 4}
                              textAnchor="end"
                              className="fill-zinc-500 text-[11px]"
                            >
                              {formatted}
                            </text>
                          </g>
                        )
                      })}

                      {/* Área preenchida sob a curva */}
                      <path d={areaPath} fill="url(#adminAreaGrad)" />

                      {/* Linha suave da curva */}
                      <path
                        d={linePath}
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />

                      {/* Pontos interativos + Labels do eixo X */}
                      {chartPoints.map((pt, idx) => {
                        const isHovered = hoveredAreaIdx === idx
                        return (
                          <g
                            key={pt.label}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredAreaIdx(idx)}
                            onMouseLeave={() => setHoveredAreaIdx(null)}
                          >
                            {/* Label X */}
                            <text
                              x={pt.x}
                              y={svgHeight - 8}
                              textAnchor="middle"
                              className="fill-zinc-500 text-[11px]"
                            >
                              {pt.label}
                            </text>

                            {/* Área invisível maior para hover */}
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={16}
                              fill="transparent"
                            />

                            {/* Ponto visível */}
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={isHovered ? 5 : 3}
                              fill="#3b82f6"
                              stroke="#0c0d12"
                              strokeWidth="2"
                            />

                            {/* Tooltip no hover */}
                            {isHovered && (
                              <g>
                                <rect
                                  x={pt.x - 34}
                                  y={pt.y - 34}
                                  width={68}
                                  height={22}
                                  rx={6}
                                  fill="#181a22"
                                  stroke="rgba(255,255,255,0.12)"
                                />
                                <text
                                  x={pt.x}
                                  y={pt.y - 19}
                                  textAnchor="middle"
                                  className="fill-white text-[11px] font-semibold"
                                >
                                  {pt.value.toLocaleString('pt-BR')}
                                </text>
                              </g>
                            )}
                          </g>
                        )
                      })}
                    </svg>
                  </div>
                </div>

                {/* Gráfico Direito: Barras Coloridas Arredondadas */}
                <div className="xl:col-span-6 bg-[#0c0d12] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <h2 className="text-base font-semibold text-zinc-100">
                      {barMode === 'regiao'
                        ? 'Cursinhos por Região'
                        : barMode === 'cidade'
                          ? 'Impacto por Cidade'
                          : 'Páginas Mais Visitadas'}
                    </h2>

                    <div className="relative">
                      <select
                        value={barMode}
                        onChange={(e) =>
                          setBarMode(
                            e.target.value as 'regiao' | 'cidade' | 'paginas'
                          )
                        }
                        className="appearance-none bg-[#111319] border border-white/10 hover:border-white/20 text-zinc-300 text-xs font-medium rounded-lg pl-3.5 pr-8 py-2 focus:outline-none cursor-pointer transition-colors"
                      >
                        <option value="regiao">Cursinhos por região</option>
                        <option value="cidade">Impacto por cidade</option>
                        <option value="paginas">Páginas mais acessadas</option>
                      </select>
                      <ChevronDown
                        size={14}
                        className="text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Corpo do Gráfico de Barras */}
                  <div className="relative h-[260px] flex flex-col justify-between pt-3 pb-7 pl-12 pr-2">
                    {/* Linhas de grade de fundo + Eixo Y */}
                    <div className="absolute inset-x-12 top-3 bottom-7 flex flex-col justify-between pointer-events-none">
                      {[1, 0.8, 0.6, 0.4, 0.2, 0].map((ratio, idx) => {
                        const val = Math.round(barMax * ratio)
                        return (
                          <div
                            key={idx}
                            className="relative w-full border-b border-white/[0.05] h-0"
                          >
                            <span className="absolute -left-12 -top-2 w-9 text-right text-[11px] text-zinc-500">
                              {val}
                            </span>
                          </div>
                        )
                      })}
                    </div>

                    {/* Colunas das Barras Coloridas */}
                    <div className="relative z-10 flex-1 flex items-end justify-around gap-3 sm:gap-5 pt-4">
                      {barSeries.map((bar) => {
                        const heightPct = Math.max(
                          8,
                          Math.round((bar.value / barMax) * 100)
                        )
                        return (
                          <div
                            key={bar.label}
                            className="flex-1 h-full flex flex-col items-center justify-end group"
                          >
                            {/* Valor exibido ao passar o mouse */}
                            <span className="mb-1.5 text-[11px] font-semibold text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                              {bar.value}
                            </span>

                            {/* Barra colorida arredondada igual à referência */}
                            <div
                              style={{
                                height: `${heightPct}%`,
                                backgroundColor: bar.color,
                              }}
                              className="w-full max-w-[68px] rounded-t-lg transition-all duration-300 group-hover:brightness-110 shadow-sm"
                            />

                            {/* Label no eixo X */}
                            <span className="absolute -bottom-6 text-[11px] text-zinc-500 truncate max-w-[80px] text-center">
                              {bar.label}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Linha 3: Métricas de Visitantes & Mapa */}
              <div className="space-y-5">
                {/* 4 Cards de Métricas de Visitantes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Visitas ao Site */}
                  <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl px-6 py-5 flex flex-col justify-between min-h-[138px] hover:border-white/[0.14] transition-colors">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                      <span className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-zinc-400">
                        <Eye size={12} />
                      </span>
                      <span>Visitas ao site (Page Views)</span>
                    </div>

                    <div className="my-2">
                      <span className="text-2xl font-bold text-white tracking-tight">
                        {analytics ? analytics.totalViews : '...'}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-500">
                      <span className="text-emerald-400 font-semibold">
                        +{analytics?.todayViews ?? 0}
                      </span>{' '}
                      visualizações hoje
                    </p>
                  </div>

                  {/* Visitantes Únicos & Dispositivos */}
                  <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl px-6 py-5 flex flex-col justify-between min-h-[138px] hover:border-white/[0.14] transition-colors">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                      <span className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-zinc-400">
                        <Smartphone size={12} />
                      </span>
                      <span>Visitantes únicos</span>
                    </div>

                    <div className="my-2">
                      <span className="text-2xl font-bold text-white tracking-tight">
                        {analytics ? analytics.uniqueVisitors : '...'}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-500">
                      <span className="text-blue-400 font-semibold">
                        {analytics?.desktopViews ?? 0} desktop
                      </span>{' '}
                      • {analytics?.mobileViews ?? 0} mobile
                    </p>
                  </div>

                  {/* Cliques em Pinos do Mapa */}
                  <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl px-6 py-5 flex flex-col justify-between min-h-[138px] hover:border-white/[0.14] transition-colors">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                      <span className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-zinc-400">
                        <MousePointerClick size={12} />
                      </span>
                      <span>Cliques em cursinhos no mapa</span>
                    </div>

                    <div className="my-2">
                      <span className="text-2xl font-bold text-white tracking-tight">
                        {analytics ? analytics.totalPinClicks : '...'}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-500 truncate">
                      {analytics?.topCursinhos?.[0] ? (
                        <>
                          Top:{' '}
                          <span className="text-emerald-400 font-semibold">
                            {analytics.topCursinhos[0].label}
                          </span>
                        </>
                      ) : (
                        'Interações nos pinos do mapa'
                      )}
                    </p>
                  </div>

                  {/* Buscas de Endereço / CEP no Mapa */}
                  <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl px-6 py-5 flex flex-col justify-between min-h-[138px] hover:border-white/[0.14] transition-colors">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                      <span className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-zinc-400">
                        <Search size={12} />
                      </span>
                      <span>Buscas de bairro / CEP</span>
                    </div>

                    <div className="my-2">
                      <span className="text-2xl font-bold text-white tracking-tight">
                        {analytics ? analytics.totalMapSearches : '...'}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-500 truncate">
                      {analytics?.recentSearches?.[0] ? (
                        <>
                          Última:{' '}
                          <span className="text-amber-400 font-semibold">
                            {analytics.recentSearches[0].term}
                          </span>
                        </>
                      ) : (
                        'Pesquisas por proximidade no mapa'
                      )}
                    </p>
                  </div>
                </div>

                {/* 3 Painéis de Detalhamento: Páginas Mais Acessadas | Cursinhos Mais Clicados | Bairros & Filtros */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {/* Painel 1: Páginas Mais Acessadas */}
                  <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-zinc-100">
                        Páginas Mais Acessadas
                      </h3>
                      <span className="text-[11px] text-zinc-500">Acessos</span>
                    </div>

                    {analytics?.topPages && analytics.topPages.length > 0 ? (
                      <div className="space-y-3">
                        {analytics.topPages.map((pg, idx) => {
                          const maxPg = analytics.topPages[0].value || 1
                          const pct = Math.max(
                            6,
                            Math.round((pg.value / maxPg) * 100)
                          )
                          return (
                            <div key={pg.label} className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-zinc-300 font-medium truncate max-w-[200px]">
                                  {pg.label === '/' ? '/ (Início)' : pg.label}
                                </span>
                                <span className="text-zinc-400 font-semibold">
                                  {pg.value}
                                </span>
                              </div>
                              <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                                <div
                                  style={{
                                    width: `${pct}%`,
                                    backgroundColor:
                                      barPalette[idx % barPalette.length],
                                  }}
                                  className="h-full rounded-full transition-all duration-300"
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      <p className="text-xs text-zinc-500 py-8 text-center">
                        Navegue pelas páginas públicas do site para ver o
                        ranking de acessos aqui em tempo real.
                      </p>
                    )}
                  </div>

                  {/* Painel 2: Cursinhos Mais Clicados no Mapa */}
                  <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-zinc-100">
                        Cursinhos Mais Clicados no Mapa
                      </h3>
                      <span className="text-[11px] text-zinc-500">Cliques</span>
                    </div>

                    {analytics?.topCursinhos &&
                    analytics.topCursinhos.length > 0 ? (
                      <div className="space-y-3">
                        {analytics.topCursinhos.map((item, idx) => {
                          const maxClick = analytics.topCursinhos[0].value || 1
                          const pct = Math.max(
                            8,
                            Math.round((item.value / maxClick) * 100)
                          )
                          return (
                            <div key={item.label} className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs gap-2">
                                <span className="text-zinc-300 font-medium truncate">
                                  {idx + 1}. {item.label}
                                </span>
                                <span className="text-emerald-400 font-semibold shrink-0">
                                  {item.value}
                                </span>
                              </div>
                              <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                                <div
                                  style={{ width: `${pct}%` }}
                                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      <p className="text-xs text-zinc-500 py-8 text-center">
                        Clique em qualquer pino na página /cursinhos para ver os
                        cursinhos mais procurados pelos alunos.
                      </p>
                    )}
                  </div>

                  {/* Painel 3: Regiões Buscadas & Filtros de Modalidade */}
                  <div className="bg-[#0c0d12] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-zinc-100">
                          Últimos Bairros / CEPs Buscados
                        </h3>
                        <span className="text-[11px] text-zinc-500">Mapa</span>
                      </div>

                      {analytics?.recentSearches &&
                      analytics.recentSearches.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {analytics.recentSearches.map((s, i) => (
                            <span
                              key={`${s.term}-${i}`}
                              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs text-zinc-300"
                            >
                              {s.term}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-zinc-500 py-2">
                          Nenhuma busca de bairro/CEP registrada ainda.
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/[0.06]">
                      <h4 className="text-xs font-semibold text-zinc-400 mb-2.5">
                        Filtros de Modalidade Mais Usados
                      </h4>
                      {analytics?.topFilters &&
                      analytics.topFilters.length > 0 ? (
                        <div className="space-y-2">
                          {analytics.topFilters.map((f) => (
                            <div
                              key={f.label}
                              className="flex items-center justify-between text-xs"
                            >
                              <span className="text-zinc-300 truncate">
                                {f.label}
                              </span>
                              <span className="text-zinc-400 font-semibold">
                                {f.value}x
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-zinc-500">
                          Nenhum filtro acionado ainda.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </main>
      </div>
    </div>
  )
}
