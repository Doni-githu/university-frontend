import { createRouter, createWebHistory } from 'vue-router'
import { RegisterView, HomeView, LoginView, ProfileView, AdminView } from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/admin/:id',
      name: 'admin',
      component: AdminView
    }
  ]
})

export default router
