import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'index', component: () => import('@/pages/Home.vue') },
  { path: '/movie/:id', name: 'movie.details', component: () => import('@/pages/MovieDetailsPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
