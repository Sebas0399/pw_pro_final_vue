<template>
<div>
  <p>{{ noticia.id }}</p>
  <p>{{ noticia.fecha }}</p>
  <p>{{ noticia.texto }}</p>

  <img :src="noticia.foto" alt="" />
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

<style>
</style>