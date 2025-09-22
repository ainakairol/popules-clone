import { createRouter, createWebHistory } from 'vue-router'  
import landingPage from '../pages/landingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: landingPage }
  ],
})

export default router
