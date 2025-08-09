import { NextRequest } from 'next/server'
import { Redis } from '@upstash/redis'
import { createHash } from 'crypto'

type ViewType = 'project' | 'post'

function makeKey(type: ViewType, slug: string): string {
  return `views:${type}:${slug}`
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type') as ViewType | null
  const slug = searchParams.get('slug')

  if (!type || !slug || (type !== 'project' && type !== 'post')) {
    return new Response(JSON.stringify({ error: 'Invalid params' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  const key = makeKey(type, slug)

  const redis = Redis.fromEnv()
  const value = await redis.get<number>(key)
  const views = typeof value === 'number' ? value : parseInt(String(value ?? '0')) || 0

  return new Response(JSON.stringify({ views }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { type?: string; slug?: string } | null
  const type = body?.type as ViewType | undefined
  const slug = body?.slug

  if (!type || !slug || (type !== 'project' && type !== 'post')) {
    return new Response(JSON.stringify({ error: 'Invalid body' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  const redis = Redis.fromEnv()
  const key = makeKey(type, slug)

  // 24h dedupe based on IP+UA hash
  const headers = (req as any).headers as Headers | undefined
  const ip = headers?.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0'
  const ua = headers?.get('user-agent') || ''
  const hash = createHash('sha256').update(`${ip}:${ua}`).digest('hex')
  const dedupeKey = `dedupe:${hash}:${type}:${slug}`

  const isNew = await redis.set(dedupeKey, '1', { nx: true, ex: 24 * 60 * 60 })
  if (!isNew) {
    const current = await redis.get<number>(key)
    const views = typeof current === 'number' ? current : parseInt(String(current ?? '0')) || 0
    return new Response(JSON.stringify({ views }), {
      status: 202,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    })
  }

  const views = await redis.incr(key)
  return new Response(JSON.stringify({ views }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}

