import type { AnalyticsGoal } from '@shared/lib/analytics/analytics.types'

export const contactLinks = [
  {
    goal: 'contact_telegram',
    href: 'https://t.me/YanBgdnv',
    label: 'Telegram',
  },
  {
    goal: 'contact_behance',
    href: 'https://www.behance.net/YanBogdanov',
    label: 'Behance',
  },
  {
    goal: 'contact_dprofile',
    href: 'https://dprofile.ru/yanbogdanov',
    label: 'Dprofile',
  },
  {
    goal: 'contact_github',
    href: 'https://github.com/YanBogdanov',
    label: 'Github',
  },
] as const satisfies readonly { goal: AnalyticsGoal; href: string; label: string }[]

export const contactEmail = 'bogdanovyanwork@gmail.com'

export const contactTimezone = {
  label: '(GMT+7)',
  timeZone: 'Asia/Novosibirsk',
} as const
