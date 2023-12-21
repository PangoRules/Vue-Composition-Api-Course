import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PostsView from '../views/PostsView.vue'
import ModalsView from '../views/ModalsView.vue'
import PostDetailView from '../views/PostDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => AboutView
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => PostsView
    },
    {
      path: '/modals',
      name: 'modals',
      component: () => ModalsView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: () => PostDetailView
    }
  ]
})

export default router
