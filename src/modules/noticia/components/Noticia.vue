<template>
  <div class="card" style="margin: 1rem; padding: 1rem;">
    <p>{{ noticia.id }}</p>
    <p>{{ noticia.fecha }}</p>
    <div v-if="noticia.texto!=null" class="card-body">
    <p>{{ noticia.texto }}</p>
  </div>
    <img :src="noticia.imagen" alt="No se pudo cargar">

    <iframe width="360" height="280" :src="noticia.video" title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  </div>
  
</template>

<script>
export default {
  mounted() {
    console.log(this.id);
  },
  props: {
    noticia: {
      name: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style></style>