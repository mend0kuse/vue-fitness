import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage.vue'
import { APP_ROUTES } from '@/shared/routing'
import AboutPage from '@/pages/about/AboutPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...APP_ROUTES.HOME,
      component: HomePage
    },
    {
      ...APP_ROUTES.ABOUT,
      component: AboutPage
    }
  ]
})
