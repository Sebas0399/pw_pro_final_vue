<template>
     <header class="header-container">
  <div class="background-image">
    <img src="@/assets/images/quejas3.png" alt="">
  </div>
  <div class="text-overlay">
    <h2>Formulario de quejas</h2>
  </div>
</header>

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
    <div class="center-button">
      <button type="submit">
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                fill="currentColor"></path>
            </svg>
          </div>
        </div>
        <span>Enviar</span>
      </button>
    </div>
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
button {
  font-family: inherit;
  font-size: 20px;
  background: royalblue;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(5em);
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* Esto asegura que el contenedor ocupe toda la altura de la pantalla */
}

form {
  margin-bottom: 20px;
}

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

.center-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  /* Ajusta este margen según tus preferencias */
}</style>