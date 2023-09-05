<template>
  <header class="header-container">
  <div class="background-image">
    <img src="@/assets/images/foro2.png" alt="">
  </div>
  <div class="text-overlay">
    <h2>Foro de la Facultad de Ingenieria y Ciencias Aplicadas</h2>
  </div>
</header>
 
  <div class="row">
    <ul class="nav flex-column col col-lg-2">

      <li class="nav-item" v-for="(foro) in foros" :key="foro">
        <div class="row">
          <div class="col">

            <a class="nav-link" @click="cambiarForo(foro.id)">{{ foro.tema }}</a>
          </div>
          <div class="col col-lg-1">
            <span class="badge bg-secondary" v-if="foro.comentarios!=null">{{foro.comentarios.length }}</span>
          </div>

        </div>

      </li>
    </ul>
    <div class="container-foros col">
      <Foro :foro="foro"></Foro>

    </div>
  </div>
</template>
  
<script>
import { obtenerTodasForoFachada } from "../helpers/ForoCliente.js";
import { obtenerForoFachada } from "../helpers/ForoCliente.js";

import Foro from "./Foro.vue";
export default {
  components: { Foro },
  mounted() {
    this.obtenerTodo();
    this.cambiarForo(1);
  },
  data() {
    return {
      foros: null,
      foro:this.cambiarForo(1)
    };
  },
  methods: {
    async obtenerTodo() {
      const data = await obtenerTodasForoFachada();
      this.foros = data;
    },
    async cambiarForo(id) {
      console.log(id)
      const data = await obtenerForoFachada(id);
      this.foro=data
    }
  },
};
</script>
  
<style scoped>
.container-foros {
  display: grid;
  
}
a:hover{
  color:red
}
</style>