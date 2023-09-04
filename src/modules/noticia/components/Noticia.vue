<template>
  <div class="card" style="margin: 1rem; padding: 1rem;">
    <p>{{ noticia.fecha }}</p>
    <p>{{ noticia.titulo }}</p>
    <div v-if="noticia.texto != undefined" class="card-body">
      <p>{{ noticia.texto.length > 100 ? noticia.texto.slice(0, 500) + '...' : noticia.texto }}</p>
    </div>
    <img :src="noticia.imagen" alt="">

    <iframe v-if="noticia.video != ''" width="360" height="280" :src="noticia.video" title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>

    <!-- Botón para redirigir a otra página -->
    
    <div class="modal" tabindex="-1" :id="'myModal-'+noticia.id">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>{{noticia.texto}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <button v-if="noticia.texto && noticia.texto.length > 500" type="button" data-bs-toggle="modal" :data-bs-target="'#myModal-'+noticia.id">Launch modal</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.castFecha();
  },
  props: {
    noticia: {
      name: Object,
      required: true,
    },
  },
  methods: {
    castFecha() {
      const fechaISO = this.noticia.fecha;
      const fecha = new Date(fechaISO);
      const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      const diaSemanaTexto = diasSemana[fecha.getDay()];
      const mesTexto = meses[fecha.getMonth()];
      this.noticia.fecha = diaSemanaTexto + " " + fecha.getDate() + " " + mesTexto + " " + fecha.getFullYear();
    },
    
  },
};
</script>

<style></style>
