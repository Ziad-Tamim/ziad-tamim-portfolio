import { posthog } from '@/lib/posthog'

export const usePostHog = () => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      posthog.capture(eventName, properties)
    }
  }

  const identifyUser = (userId: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      posthog.identify(userId, properties)
    }
  }

  const resetUser = () => {
    if (typeof window !== 'undefined') {
      posthog.reset()
    }
  }

  return {
    trackEvent,
    identifyUser,
    resetUser,
  }
}