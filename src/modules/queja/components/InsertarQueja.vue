<template>
    <div>
      <h1>Formulario de Quejas</h1>
    </div>
    <form @submit.prevent="insertarFormulario">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="queja.nombre" required />
      </div>
      <div class="form-group">
        <label for="correo">Correo Electrónico:</label>
        <input type="email" id="correo" v-model="queja.correo" required />
      </div>
      <div class="form-group">
        <label for="queja">Queja:</label>
        <textarea id="queja" v-model="queja.descripcion" required></textarea>
      </div>
      <button type="submit">Enviar Queja</button>
    </form>
      <div>
    <Confirmacion :showConfirmation="showConfirmation" />
    </div>
  </template>
  
  <script>
  import { ingresarFormularioFachada } from "../helpers/ClienteQueja.js";
  import Confirmacion from "../components/Confirmacion.vue";
  export default {
    data() {
      return {
        queja: {
          nombre: "",
          correo: "",
          descripcion: "",
          showConfirmation: false,
        },
      };
    },
    methods: {
      submitForm() {
        this.$emit("submit", this.queja); // Emitir evento para enviar datos al componente padre
      },
  
   /*   handleFormSubmit() {
        // Aquí puedes enviar la queja al servidor o realizar otras acciones
        console.log(this.queja);
  
        // Mostrar el mensaje de confirmación
        this.showConfirmation = true;
  
        // Limpia el formulario después de enviarlo
        queja.nombre = "";
        queja.correo = "";
        queja.descripcion = "";
      },
  */
      async insertarFormulario() {
        await ingresarFormularioFachada(this.queja);
  
        this.showConfirmation = true;
  
        this.queja.nombre = "";
        this.queja.correo = "";
        this.queja.descripcion = "";
      },
  
  
    },
      components: {
      Confirmacion,
  
    }
  };
  </script>
  
  
  <style scoped>
  .complaint-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  </style>