<template>
  <h1>{{ this.totalNoticias }}</h1>
  <div class="container-noticias">
    <Noticia v-for="noticia in noticiasPag" v-bind:key="noticia" :noticia="noticia"></Noticia>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item" v-for="(item) in paginas" :key="item"><a class="page-link" href="#" @click="paginar(item)">{{ item }}</a></li>
        
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
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
      paginas:0,
      noticiasPag:null,
      totalNoticias:0,
      noticiasPag:10
    };
  },
  methods: {
    async obtenerTodo() {
      const data = await obtenerTodasNoticiasFachada();
      this.noticias = data;
      this.totalNoticias=this.noticias.length
      this.paginas=(this.totalNoticias/this.noticiasPag)|0
      if((this.totalNoticias%this.noticiasPag)>0){
        this.paginas++
      }
      console.log(this.paginas);
      this.paginar()
    },
    paginar(index){
      //1 0-9
      //2 10-19
      //3 20-39
      //4 40-lenNoticias
      this.noticiasPag=this.noticias.slice((index-1)*10,((index-1)*10)+9)
    }
   

  },
};
</script>

<style scoped>
.container-noticias {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>