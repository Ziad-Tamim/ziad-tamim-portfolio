import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

    if (posthogKey && posthogHost) {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true, // Enable pageleave capture
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
        },
      })
    }
  }
}

export { posthog }