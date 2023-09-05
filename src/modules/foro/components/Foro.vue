<template>
    <div class="card" style="margin: 1rem; padding: 1rem;">

      <p>{{ foro.tema }}</p>
      <h1>Comentarios</h1>
      <span class="badge bg-primary rounded-pill" v-if="foro.comentarios != null">{{ foro.comentarios.length }}</span>
      <ol class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start"
            v-for="(comentario, index) in comentariosPaginados" :key="index">
          <div class="ms-2 me-auto">
            {{ comentario }}
          </div>
        </li>
      </ol>

  
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': paginaActual === 1 }">
            <a class="page-link" href="#" @click="irAPagina(paginaActual - 1)">Anterior</a>
          </li>
          <li class="page-item" v-for="pagina in paginas" :key="pagina" :class="{ 'active': paginaActual === pagina }">
            <a class="page-link" href="#" @click="irAPagina(pagina)">{{ pagina }}</a>
          </li>
          <li class="page-item" :class="{ 'disabled': paginaActual === paginas }">
            <a class="page-link" href="#" @click="irAPagina(paginaActual + 1)">Siguiente</a>
          </li>
        </ul>
      </nav>
  
      <p>Agregar comentario</p>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required v-model="newComentario"></textarea>
      <button type="button" class="btn btn-primary" @click="ponerComentario">Comentar</button>
    </div>
  </template>
  
  <script>
  import { actualizarForoFachada } from "../helpers/ForoCliente.js";
  
  export default {
    data() {
      return {
        showModal: false,
        newComentario: null,
        comentariosPorPagina: 5, // Número de comentarios por página
        paginaActual: 1,
      };
    },
    mounted() {
      console.log(this.foro.id);
    },
    props: {
      foro: {
        name: Object,
        required: true,
      },
    },
    computed: {
      comentariosPaginados() {
        if (this.foro.comentarios) {
          const startIndex = (this.paginaActual - 1) * this.comentariosPorPagina;
          const endIndex = startIndex + this.comentariosPorPagina;
          return this.foro.comentarios.slice(startIndex, endIndex);
        } else {
          return [];
        }
      },
      paginas() {
        if (this.foro.comentarios) {
          return Math.ceil(this.foro.comentarios.length / this.comentariosPorPagina);
        } else {
          return 1;
        }
      },
    },
    methods: {
      getID() {
        console.log(this.foro.id);
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      irAPagina(pagina) {
        if (pagina >= 1 && pagina <= this.paginas) {
          this.paginaActual = pagina;
        }
      },
      async ponerComentario() {
        console.log(this.foro.id);
        this.showModal = false;
        if (this.foro.comentarios) {
          this.foro.comentarios.push(this.newComentario);
          await actualizarForoFachada(this.foro, this.foro.id);
        } else {
          this.foro.comentarios = [this.newComentario];
          await actualizarForoFachada(this.foro, this.foro.id);
        }
      },
    },
  };
  </script>
  

  

<style scoped>
.card{
    margin: 1rem;
     padding: 1rem;
     background-color: rgba(231, 185, 245, 0.5);
}
.badge{
    background-color: rgb(59, 14, 100);
}
</style>
