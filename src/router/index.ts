import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/home.vue')
        },
        {
          path: '/pages/sort/sort',
          name: 'sort',
          component: () => import('../views/Pages/sort.vue')
        },
        {
          path: '/pages/collection/collection',
          name: 'collection',
          component: () => import('../views/Pages/collection.vue')
        },
        {
          path: '/pages/mine/mine',
          name: 'mine',
          component: () => import('../views/Pages/mine.vue')
        },
      ]
    },
    {
      path: '/pages/musicDetail/musicDetail',
      name: 'musicDetail',
      component: () => import('../views/Pages/musicDetail.vue')
    },
    {
      path: '/pages/readLIst/readLIst',
      name: 'readLIst',
      component: () => import('../views/Pages/readList.vue')
    },
    {
      path: '/pages/listenNoval/listenNoval',
      name: 'listenNoval',
      component: () => import('../views/Pages/ListenNoval.vue')
    },
    {
      path: '/pages/listenMusic/listenMusic',
      name: 'listenMusic',
      component: () => import('../views/Pages/ListenMusic.vue')
    },
    {
      path: '/pages/listenKnowledge/listenKnowledge',
      name: 'listenKnowledge',
      component: () => import('../views/Pages/ListenKnowledge.vue')
    },
    {
      path: '/pages/bookDetail/bookDetail',
      name: 'bookDetail',
      component: () => import('../views/Pages/bookDetail.vue')
    },
    {
      path: '/pages/reading/reading',
      name: 'reading',
      component: () => import('../views/Pages/reading.vue')
    },
  ]
})

export default router
