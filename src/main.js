import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.min.js'
import '@/assets/js/masonry.pkgd.min.js'
import './assets/css/estilos.css'


import Particles from "vue3-particles";
const app = createApp(App)

app.use(router)
app.use(Particles)
app.mount('#app')