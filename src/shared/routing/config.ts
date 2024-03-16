export const APP_ROUTES: Record<string, { path: string; name: string }> = {
  HOME: {
    path: '/',
    name: 'Главная'
  },
  ABOUT: {
    path: '/about',
    name: 'О нас'
  }
} as const
