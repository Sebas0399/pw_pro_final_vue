<template>
  <header class="header-container">
  <div class="background-image">
    <img src="@/assets/images/news2.png" alt="">
  </div>
  <div class="text-overlay">
    <h2>Noticias Facultad</h2>
  </div>
</header>
 
  <div class="container-noticias ">
    <Noticia v-for="noticia in noticiasPaginadas" :key="noticia.id" :noticia="noticia"></Noticia>
  </div>
  <nav class="nav" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
        <a class="page-link" href="#" @click="previousPage">Previous</a>
      </li>
      <li class="page-item" v-for="page in paginas" :key="page" :class="{ 'active': currentPage === page }">
        <a class="page-link" href="#" @click="goToPage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ 'disabled': currentPage === paginas }">
        <a class="page-link" href="#" @click="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { obtenerTodasNoticiasFachada } from "../helpers/NoticiaCliente.js";
import Noticia from "./Noticia.vue";

export default {
  components: { Noticia },
  mounted() {
    this.obtenerTodasNoticias();
    
  },
  data() {
    return {
      noticias: [],
      noticiasPorPagina: 9,
      totalNoticias: 0,
      paginas: 0,
      currentPage: 1,
      imagenes:[],
      imagenFin:[]
    };
  },
  computed: {
    noticiasPaginadas() {
      const startIndex = (this.currentPage - 1) * this.noticiasPorPagina;
      const endIndex = startIndex + this.noticiasPorPagina;
      return this.noticias.slice(startIndex, endIndex);
    },
  },
  methods: {
    async obtenerTodasNoticias() {
      const data = await obtenerTodasNoticiasFachada();
      this.noticias = data;
      this.totalNoticias = this.noticias.length;
      this.noticias.forEach((x)=>{
        if(x.imagen!=""){
          this.imagenes.push(x.imagen)
        }
      })
      for (let index = 0; index < this.imagenes.length; index++) {
        if(index>0){
          this.imagenFin.push(this.imagenes[index])
        }
        
      }
      this.paginas = Math.ceil(this.totalNoticias / this.noticiasPorPagina);
    },
    goToPage(page) {
      if (page >= 1 && page <= this.paginas) {
        this.currentPage = page;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.paginas) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.container-noticias {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* Espacio entre las noticias */
}

/* Ajuste para pantallas más pequeñas */
@media (max-width: 768px) {
  .container-noticias {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Ajuste para pantallas aún más pequeñas */
@media (max-width: 576px) {
  .container-noticias {
    grid-template-columns: repeat(1, 1fr);
  }
}

.nav{
  display:sticky;
  justify-content: center;
}
</style>