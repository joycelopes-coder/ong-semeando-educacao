const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333'
const VISITOR_KEY = 'semeando_visitor_id'

function getOrCreateVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_KEY)
    if (!id) {
      id =
        typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : `v-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      localStorage.setItem(VISITOR_KEY, id)
    }
    return id
  } catch {
    return 'anonymous'
  }
}

function getDeviceType(): 'MOBILE' | 'DESKTOP' {
  if (typeof window === 'undefined') return 'DESKTOP'
  const ua = navigator.userAgent || ''
  if (/Mobi|Android|iPhone|iPad/i.test(ua) || window.innerWidth < 768) {
    return 'MOBILE'
  }
  return 'DESKTOP'
}

export function trackSiteEvent(params: {
  type: 'PAGE_VIEW' | 'MAP_PIN_CLICK' | 'MAP_SEARCH' | 'MAP_FILTER'
  path: string
  target?: string
}) {
  try {
    const visitorId = getOrCreateVisitorId()
    const device = getDeviceType()
    const referrer =
      typeof document !== 'undefined' && document.referrer
        ? document.referrer
        : 'Direto'

    fetch(`${API_URL}/api/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: params.type,
        path: params.path,
        target: params.target || null,
        visitorId,
        device,
        referrer,
      }),
      keepalive: true,
    }).catch(() => {
      // Falha silenciosa para nunca interromper a navegação do visitante
    })
  } catch {
    // Ignora erros de bloqueadores de rede
  }
}
