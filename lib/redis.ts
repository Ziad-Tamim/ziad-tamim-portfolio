const rawUrl = process.env.UPSTASH_REDIS_REST_URL
const rawToken = process.env.UPSTASH_REDIS_REST_TOKEN

function getBaseUrl(): string {
  const base = (rawUrl ?? '').trim().replace(/\s+/g, '')
  if (!base || !base.startsWith('http')) {
    throw new Error('Missing or invalid UPSTASH_REDIS_REST_URL')
  }
  return base.replace(/\/+$/, '')
}

function getToken(): string {
  const t = (rawToken ?? '').trim()
  if (!t) throw new Error('Missing UPSTASH_REDIS_REST_TOKEN')
  return t
}

export async function redisGet(key: string): Promise<number> {
  const base = getBaseUrl()
  const token = getToken()
  const res = await fetch(`${base}/get/${encodeURIComponent(key)}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Upstash GET failed (${res.status}): ${text}`)
  }
  const data = (await res.json()) as { result?: string | number | null }
  const value = typeof data.result === 'number' ? data.result : parseInt(String(data.result ?? '0'))
  return Number.isFinite(value) ? value : 0
}

export async function redisIncr(key: string): Promise<number> {
  const base = getBaseUrl()
  const token = getToken()
  const res = await fetch(`${base}/incr/${encodeURIComponent(key)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Upstash INCR failed (${res.status}): ${text}`)
  }
  const data = (await res.json()) as { result?: number }
  return typeof data.result === 'number' ? data.result : 0
}

