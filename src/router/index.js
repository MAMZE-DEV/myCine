import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import mainView from '../views/main.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainView,
    }
  ],
})

export default router
