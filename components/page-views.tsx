'use client'

import { useEffect, useState } from 'react'
import { posthog } from '@/lib/posthog'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import { ViewCounter } from '@/lib/view-counter'

interface PageViewsProps {
  slug: string
  type: 'project' | 'post'
  className?: string
}

export default function PageViews({ slug, type, className = '' }: PageViewsProps) {
  const [views, setViews] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const trackViews = async () => {
      try {
        if (typeof window === 'undefined') return

        const sessionKey = `viewed:${type}:${slug}`
        let newViews = 0

        if (!sessionStorage.getItem(sessionKey)) {
          newViews = await ViewCounter.incrementViews(type, slug)
          sessionStorage.setItem(sessionKey, '1')
        } else {
          newViews = await ViewCounter.getViews(type, slug)
        }

        setViews(newViews)

        if (posthog) {
          posthog.capture('page_view_detailed', {
            page_type: type,
            page_slug: slug,
            page_url: window.location.href,
            view_count: newViews,
          })
        }
      } catch (error) {
        console.error('Error tracking page views:', error)
        const fallback = await ViewCounter.getViews(type, slug)
        setViews(fallback)
      } finally {
        setLoading(false)
      }
    }

    trackViews()
  }, [slug, type])

  if (loading) {
    return (
      <div className={`flex items-center gap-1 text-sm text-muted-foreground ${className}`}>
        <EyeOpenIcon className="h-4 w-4" />
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-1 text-sm text-muted-foreground ${className}`}>
      <EyeOpenIcon className="h-4 w-4" />
      <span>{views?.toLocaleString() || 0} views</span>
    </div>
  )
}