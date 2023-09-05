import { createRouter, createWebHistory } from 'vue-router'
import Noticias from '../modules/noticia/components/TodasNoticias.vue'
import Foros from '../modules/foro/components/TodasForo.vue'
import ForosInsertar from '../modules/foro/components/InsertarForo.vue'

import NoticiasInsertar from '../modules/noticia/components/InsertarNoticia.vue'
import IngresarSuscripcion from '../modules/suscripcion/pages/IngresarSuscripcion.vue'
import IngresarQueja from "../modules/queja/components/InsertarQueja.vue";
import NotFound from "../components/NotFound.vue";


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
    path: '/suscribirse',
    name: 'suscribirse',
    component: IngresarSuscripcion,

  },
  {
    path: '/queja',
    name: 'queja',
    component: IngresarQueja,

  }, { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
