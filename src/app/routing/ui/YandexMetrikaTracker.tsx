import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const YANDEX_METRIKA_COUNTER_ID = 113560407

declare global {
  interface Window {
    ym?: (counterId: number, action: string, ...args: unknown[]) => void
  }
}

export function YandexMetrikaTracker() {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    window.ym?.(YANDEX_METRIKA_COUNTER_ID, 'hit', location.pathname + location.search)
  }, [location.pathname, location.search])

  return null
}
