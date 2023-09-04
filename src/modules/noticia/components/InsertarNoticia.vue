<template >
  <div>
    <h1>Noticia</h1>
    <form class="g-3 needs-validation">
      <div class="mb-3">
        <label for="fechaInput" class="form-label">Fecha</label>
        <input type="date" class="form-control" id="fechaInput" v-model="noticia.fecha" required>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="texto" v-model="enabled.texto">
        <label class="form-check-label" for="inlineCheckbox1">Texto</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="imagen" v-model="enabled.imagen">
        <label class="form-check-label" for="inlineCheckbox2">Imagen</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="video" v-model="enabled.video">
        <label class="form-check-label" for="inlineCheckbox3">Video</label>
      </div>

      <div class="mb-3 " v-if="enabled.texto">
        <label for="textoInput" class="form-label">Texto</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required
          v-model="noticia.texto"></textarea>
      </div>
      <div class="mb-3 " v-if="enabled.imagen">
        <label for="imagenInput" class="form-label">Imagen</label>
        <input type="file" class="form-control" id="imagenInput" required @change="capturar">

      </div>
      <div class="mb-3 " v-if="enabled.video">
        <label for="videoInput" class="form-label">Video</label>
        <input type="text" class="form-control" id="videoInput" required v-model="noticia.video">

      </div>
      <div>
        <button class="btn btn-primary" @click="insertarNoticia">Insertar</button>

      </div>
    </form>


    <div class="alert alert-success" role="alert">
      Se inserto la noticia correctamente
    </div>
  </div>
</template>
<script>
import { ingresarNoticiaFachada } from "../helpers/NoticiaCliente.js";
export default {
  mounted() {

  },
  data() {
    return {
      noticia: {
        texto: "",
        video: "",
        fecha: "",
        imagen: ""
      },
      enabled: {
        texto: false,
        video: false,
        imagen: false
      }
    };
  },
  methods: {
    capturar(event) {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = (e) => {
        this.noticia.imagen = e.target.result;
        console.log('Imagen leída:', this.noticia.imagen);
      };
      reader.readAsDataURL(file);
      //this.noticia.imagen = file;
      console.log(this.noticia)

    },
    async insertarNoticia() {
      var newDate = new Date(this.noticia.fecha + 'T00:00');
      this.noticia.fecha = newDate
      console.log(this.noticia)
      await ingresarNoticiaFachada(this.noticia);


    },
  },
};
</script>
<style scoped>
form {
  margin: 20px;
}
</style>
