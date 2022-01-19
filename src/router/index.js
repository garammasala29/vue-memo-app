import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import MemoAddForm from '../components/MemoAddForm'
import MemoDetail from '../components/MemoDetail'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/memos/new',
    name: 'MemoAddForm',
    component: MemoAddForm
  },
  {
    path: '/memos/:id',
    name: 'MemoDetail',
    component: MemoDetail
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
