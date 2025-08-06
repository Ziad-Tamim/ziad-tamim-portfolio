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
    let hasTracked = false

    const trackViews = async () => {
      try {
        if (typeof window !== 'undefined' && !hasTracked) {
          hasTracked = true

          // Initialize demo data on first load
          ViewCounter.initializeDemoData()

          // Increment view count (handles session checking internally)
          const newViews = ViewCounter.incrementViews(type, slug)
          setViews(newViews)

          // Track with PostHog if available
          if (posthog) {
            posthog.capture('page_view_detailed', {
              page_type: type,
              page_slug: slug,
              page_url: window.location.href,
              view_count: newViews
            })
          }
        }
      } catch (error) {
        console.error('Error tracking page views:', error)
        setViews(ViewCounter.getViews(type, slug))
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