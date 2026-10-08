import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { trackPageView } from '@shared/lib/analytics/analytics'

export function YandexMetrikaTracker() {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    trackPageView(location.pathname + location.search)
  }, [location.pathname, location.search])

  return null
}
