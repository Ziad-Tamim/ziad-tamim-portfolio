// Unified view counter system
export class ViewCounter {
  private static getStorageKey(type: 'project' | 'post', slug: string): string {
    return `views_${type}_${slug}`
  }

  private static getSessionKey(type: 'project' | 'post', slug: string): string {
    return `session_${type}_${slug}`
  }

  // Get current view count without incrementing
  static getViews(type: 'project' | 'post', slug: string): number {
    if (typeof window === 'undefined') return 0
    
    try {
      const storageKey = this.getStorageKey(type, slug)
      return parseInt(localStorage.getItem(storageKey) || '0')
    } catch {
      return 0
    }
  }

  // Increment view count (only once per session)
  static incrementViews(type: 'project' | 'post', slug: string): number {
    if (typeof window === 'undefined') return 0

    try {
      const storageKey = this.getStorageKey(type, slug)
      const sessionKey = this.getSessionKey(type, slug)
      
      // Check if this session has already been counted
      const sessionCounted = sessionStorage.getItem(sessionKey)
      
      if (!sessionCounted) {
        // Increment view count
        const currentViews = parseInt(localStorage.getItem(storageKey) || '0')
        const newViews = currentViews + 1
        localStorage.setItem(storageKey, newViews.toString())
        
        // Mark this session as counted
        sessionStorage.setItem(sessionKey, 'true')
        
        return newViews
      } else {
        // Return current count without incrementing
        return parseInt(localStorage.getItem(storageKey) || '0')
      }
    } catch {
      return 0
    }
  }

  // Initialize some demo data for new installations
  static initializeDemoData() {
    if (typeof window === 'undefined') return

    const demoData = [
      { type: 'project' as const, slug: '3DOF-Robot-arm', views: 308 },
      { type: 'project' as const, slug: 'classification_HOML', views: 238 },
      { type: 'project' as const, slug: 'portfolio-website', views: 632 },
      { type: 'project' as const, slug: 'median-house-price-prediction', views: 1081 },
      { type: 'project' as const, slug: 'smart-parking-An-Edge-Based-Approach-Using-AI', views: 445 },
      { type: 'project' as const, slug: 'AI-path-fining-london-tube', views: 789 },
      { type: 'project' as const, slug: 'computer-vision-toolkit', views: 356 },
      { type: 'project' as const, slug: 'USV_build', views: 267 },
      { type: 'post' as const, slug: 'every-data-scientist-should-know-this-by-heart', views: 1456 },
      { type: 'post' as const, slug: 'Introduction-to-tinyML', views: 892 },
    ]

    // Only initialize if no data exists
    demoData.forEach(({ type, slug, views }) => {
      const storageKey = this.getStorageKey(type, slug)
      if (!localStorage.getItem(storageKey)) {
        localStorage.setItem(storageKey, views.toString())
      }
    })
  }
}