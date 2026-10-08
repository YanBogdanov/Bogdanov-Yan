import type { AnalyticsGoal } from './analytics.types'

export const YANDEX_METRIKA_COUNTER_ID = 113560407

declare global {
  interface Window {
    ym?: (counterId: number, action: string, ...args: unknown[]) => void
  }
}

export function reachGoal(goal: AnalyticsGoal) {
  window.ym?.(YANDEX_METRIKA_COUNTER_ID, 'reachGoal', goal)
}

export function trackPageView(url: string) {
  window.ym?.(YANDEX_METRIKA_COUNTER_ID, 'hit', url)
}
