import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Noticias from '../modules/noticia/components/TodasNoticias.vue'
import Foros from '../modules/foro/components/TodasForo.vue'
import ForosInsertar from '../modules/foro/components/InsertarForo.vue'

import NoticiasInsertar from '../modules/noticia/components/InsertarNoticia.vue'
import IngresarSuscripcion from '../modules/suscripcion/pages/IngresarSuscripcion.vue'
const routes = [
  {
    path: '/noticias',
    name: 'noticias',
    component: Noticias,
    
  },
  {
    path: '/foros',
    name: 'foros',
    component: Foros,
    
  },
  {
    path: '/noticiasInsertar',
    name: 'noticiasInsertar',
    component: NoticiasInsertar,
    
  },
  {
    path: '/forosInsertar',
    name: 'forosInsertar',
    component: ForosInsertar,
    
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/suscribirse',
    name: 'Suscribirse',
    component: IngresarSuscripcion,
    
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
