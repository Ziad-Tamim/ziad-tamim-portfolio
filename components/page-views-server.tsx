'use client'

import { useEffect, useState } from 'react'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import { ViewCounter } from '@/lib/view-counter'

interface PageViewsServerProps {
  slug: string
  type: 'project' | 'post'
  className?: string
}

export default function PageViewsServer({ slug, type, className = '' }: PageViewsServerProps) {
  const [views, setViews] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize demo data
      ViewCounter.initializeDemoData()
      
      // Get current view count without incrementing
      const currentViews = ViewCounter.getViews(type, slug)
      setViews(currentViews)
    }
  }, [slug, type])

  return (
    <div className={`flex items-center gap-1 text-sm text-muted-foreground ${className}`}>
      <EyeOpenIcon className="h-4 w-4" />
      <span>{views.toLocaleString()} views</span>
    </div>
  )
}