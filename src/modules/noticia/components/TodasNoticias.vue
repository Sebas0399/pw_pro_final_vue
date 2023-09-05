<template>
  <div>
    <h1>Noticias Facultad</h1>
    <div class="container-noticias" v-if="!notFound">
      <Noticia v-for="noticia in noticiasPaginadas" :key="noticia.id" :noticia="noticia"></Noticia>
    </div>
    <div v-else>
      <div class="d-flex align-items-center justify-content-center vh-50">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> No existen noticias.</p>
              
                <a class="btn btn-primary">Contacta con soporte</a>
            </div>
        </div>
    </div>
    <nav aria-label="Page navigation example">
      <!-- Resto de tu paginación -->
    </nav>
  </div>
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
      notFound: false, // Variable para manejar el mensaje de error
      noticiasPorPagina: 10,
      totalNoticias: 0,
      paginas: 0,
      currentPage: 1,
      imagenes: [],
      imagenFin: [],
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
      try {
        const data = await obtenerTodasNoticiasFachada();
        this.noticias = data;
        this.totalNoticias = this.noticias.length;
        this.noticias.forEach((x) => {
          if (x.imagen != "") {
            this.imagenes.push(x.imagen);
          }
        });
        for (let index = 0; index < this.imagenes.length; index++) {
          if (index > 0) {
            this.imagenFin.push(this.imagenes[index]);
          }
        }
        this.paginas = Math.ceil(this.totalNoticias / this.noticiasPorPagina);
      } catch (error) {
        // Si se produce un error, verifica si es un error 404
        if (error.response && error.response.status === 404) {
          this.notFound = true; // Establece la variable notFound en true
        } else {
          console.error("Error al obtener noticias:", error);
        }
      }
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
}
</style>
