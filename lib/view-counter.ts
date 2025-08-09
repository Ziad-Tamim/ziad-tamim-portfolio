// Server-backed view counter using Upstash Redis via API
export class ViewCounter {
  static async getViews(type: 'project' | 'post', slug: string): Promise<number> {
    try {
      const res = await fetch(`/api/views?type=${encodeURIComponent(type)}&slug=${encodeURIComponent(slug)}`, {
        method: 'GET',
        headers: { 'accept': 'application/json' },
        cache: 'no-store',
      })
      if (!res.ok) return 0
      const data = (await res.json()) as { views: number }
      return typeof data.views === 'number' ? data.views : 0
    } catch {
      return 0
    }
  }

  static async incrementViews(type: 'project' | 'post', slug: string): Promise<number> {
    try {
      const res = await fetch('/api/views', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ type, slug }),
        cache: 'no-store',
      })
      if (!res.ok) return 0
      const data = (await res.json()) as { views: number }
      return typeof data.views === 'number' ? data.views : 0
    } catch {
      return 0
    }
  }
}