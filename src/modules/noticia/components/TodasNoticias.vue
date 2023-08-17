<template>
  <div class="container-noticias" >
    <Noticia  v-for="noticia in noticias" v-bind:key="noticia" :noticia="noticia"></Noticia>
  </div>
</template>

<script>
import { obtenerTodasNoticiasFachada } from "../helpers/NoticiaCliente.js";
import Noticia from "./Noticia.vue";
export default {
  components: { Noticia },
  mounted() {
    this.obtenerTodo();
  },
  data() {
    return {
      noticias: null,
    };
  },
  methods: {
    async obtenerTodo() {
      const data = await obtenerTodasNoticiasFachada();
      this.noticias = data;
      console.log(data);
    },
  },
};
</script>

<style scoped>
.container-noticias{
    display: grid;
   grid-template-columns: repeat(3,1fr);
}
</style>