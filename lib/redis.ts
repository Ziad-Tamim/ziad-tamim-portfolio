const url = process.env.UPSTASH_REDIS_REST_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN

export async function redisGet(key: string): Promise<number> {
  if (!url || !token) return 0
  try {
    const res = await fetch(`${url}/get/${encodeURIComponent(key)}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    })
    if (!res.ok) return 0
    const data = (await res.json()) as { result?: string | number | null }
    const value = typeof data.result === 'number' ? data.result : parseInt(String(data.result ?? '0'))
    return Number.isFinite(value) ? value : 0
  } catch {
    return 0
  }
}

export async function redisIncr(key: string): Promise<number> {
  if (!url || !token) return 0
  try {
    const res = await fetch(`${url}/incr/${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    })
    if (!res.ok) return 0
    const data = (await res.json()) as { result?: number }
    return typeof data.result === 'number' ? data.result : 0
  } catch {
    return 0
  }
}

