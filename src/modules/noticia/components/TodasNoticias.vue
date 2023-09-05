<template>
  <header class="header-container">
    <div class="background-image">
      <img src="@/assets/images/news2.png" alt="">
    </div>
    <div class="text-overlay">
      <h2>Noticias Facultad</h2>
    </div>
  </header>
  <div class="container-ts">
        <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
            background: {
                color: {
                    value: '#0d47a1'
                }
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 250,
                        duration: 2,
                        opacity: 0,
                        size: 0
                    },
                    push: {
                        quantity: 2
                    },
                    repulse: {
                        distance: 400
                    }
                }
            },
            particles: {
                color: {
                    value: '#ffffff'
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: true,
                    speed: 6,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    random: true,
                    value: 5
                }
            },
            detectRetina: true
        }" />
    </div>
  <div class="container-noticias ">
    <Noticia v-for="noticia in noticiasPaginadas" :key="noticia.id" :noticia="noticia"></Noticia>
  </div>
  <nav v-if="noticias.length!=0" class="nav" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
        <a class="page-link" href="#" @click="previousPage">Anterior</a>
      </li>
      <li class="page-item" v-for="page in paginas" :key="page" :class="{ 'active': currentPage === page }">
        <a class="page-link" href="#" @click="goToPage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ 'disabled': currentPage === paginas }">
        <a class="page-link" href="#" @click="nextPage">Después</a>
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
      notFound: false, // Variable para manejar el mensaje de error

      noticiasPorPagina: 9,
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
import { loadFull } from "tsparticles";
const particlesInit = async (engine) => {
    await loadFull(engine);
};
const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
</script>

<style scoped>
.container-noticias {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}


@media (max-width: 768px) {
  .container-noticias {
    grid-template-columns: repeat(2, 1fr);
  }
}

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
