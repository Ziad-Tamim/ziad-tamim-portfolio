import { NextRequest } from 'next/server'
import { redisGet, redisIncr } from '@/lib/redis'

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
  const views = await redisGet(key)
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

  const key = makeKey(type, slug)
  const views = await redisIncr(key)
  return new Response(JSON.stringify({ views }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}

