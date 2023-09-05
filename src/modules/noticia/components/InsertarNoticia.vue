<template>
  <div>
    <h1>Noticia</h1>
    <form class="g-3 needs-validation" @submit.prevent="submitForm" novalidate>
      <div class="mb-3">
        <label for="fechaInput" class="form-label">Fecha</label>
        <input type="date" class="form-control" id="fechaInput" v-model="noticia.fecha" required>
      </div>
      <div class="mb-3">
        <label for="tituloInput" class="form-label">Titulo</label>
        <input type="text" class="form-control" id="tituloInput" v-model="noticia.titulo" required>
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
        <textarea class="form-control" id="textoInput" rows="3" v-model="noticia.texto"></textarea>
      </div>
      <div class="mb-3 " v-if="enabled.imagen">
        <label for="imagenInput" class="form-label">Imagen</label>
        <input type="file" class="form-control" id="imagenInput" @change="capturar">
      </div>
      <div class="mb-3 " v-if="enabled.video">
        <label for="videoInput" class="form-label">Video</label>
        <input type="text" class="form-control" id="videoInput" v-model="noticia.video">
      </div>
      <div class="mb-3">
        <label for="autorInput" class="form-label">Autor</label>
        <input type="text" class="form-control" id="autorInput" v-model="noticia.autor" required>
      </div>
    </form>

    <div>
      <button type="button" class="btn btn-primary" @click="insertarNoticia">Insertar</button>
    </div>
  </div>
  <div v-if="msj" class="alert alert-primary alert-dismissible fade show" role="alert">
    {{ mensaje }}
    <button type="button" class="btn-close" aria-label="Close" @click="cerrarAlert"></button>
  </div>
  <div v-if="msjErr" class="alert alert-danger alert-dismissible fade show" role="alert">
    {{ mensaje }}
    <button type="button" class="btn-close" aria-label="Close" @click="cerrarAlert"></button>
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
        titulo: "",
        texto: "",
        video: "",
        fecha: "",
        imagen: "",
        autor:"",

      },
      msj: false,
      mensaje: "",
      msjErr: false,
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
      };
      reader.readAsDataURL(file);
      console.log(this.noticia)

    },


    async insertarNoticia() {
      if (!this.noticia.fecha || !this.noticia.titulo) {
        this.msj = false;
        this.msjErr = true;
        this.mensaje = "Por favor, complete los campos obligatorios (Fecha y Título).";
      } else {
        var newDate = new Date(this.noticia.fecha + 'T00:00');
        this.noticia.fecha = newDate;
        this.noticia.video = this.convertirEnlace(this.noticia.video);
        console.log(this.noticia);

        try {
          await ingresarNoticiaFachada(this.noticia);
          this.msj = true;
          this.msjErr = false;
          this.mensaje = "Noticia insertada con éxito";
          this.reset()
        } catch (error) {
          if (error.response && error.response.status === 400) {
            this.msj = false;
            this.msjErr = true;
            this.mensaje = "Error: Bad Request - Por favor, verifique los datos de la noticia.";
          } else if (error.response && error.response.status === 500) {
            this.msj = false;
            this.msjErr = true;
            this.mensaje = "Error interno del servidor. Intente nuevamente más tarde.";
          } else {
            this.msj = false;
            this.msjErr = true;
            this.mensaje = "Error desconocido. Intente nuevamente más tarde.";
          }
        }
      }
    },
    cerrarAlert() {
      this.msj = false;
      this.msjErr = false;
    },
    reset() {
      this.noticia = {
        titulo: "",
        texto: "",
        video: "",
        fecha: "",
        imagen: "",
        autor:""

      }
    },
    convertirEnlace(originalURL) {
      const regex = /https:\/\/www.youtube.com\/watch\?v=([A-Za-z0-9_\-]+)/;
      const match = originalURL.match(regex);

      if (match) {
        const videoId = match[1];
        const embedURL = `https://www.youtube.com/embed/${videoId}`;
        return embedURL;
      } else {
        return "";
      }
    }
  },

};
</script>
<style scoped>
form {
  margin: 20px;
}

.alert {
  margin-top: 20px;
}
</style>
