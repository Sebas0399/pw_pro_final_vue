<template>
  <div id="app" class="container mt-4">
    <form onsubmit="return false;">
      <div class="form-group">
        <label for="nombreEstudiante">Nombre</label>
        <input type="text" class="form-control" v-model="nombreEstudiante" id="nombreEstudiante">
      </div>
      <div class="form-group">
        <label for="apellidoEstudiante">Apellido</label>
        <input type="text" class="form-control" v-model="apellidoEstudiante" id="apellidoEstudiante">
      </div>
      <div class="form-group">
        <label for="cedulaEstudiante">Cédula</label>
        <input type="text" class="form-control" v-model="cedulaEstudiante" id="cedulaEstudiante">
      </div>
      <div class="form-group">
        <label for="correoElectronico">Correo Electrónico</label>
        <input type="email" class="form-control" v-model="correoElectronico" id="correoElectronico">
      </div>
      <div class="form-group">
        <label for="semestre">Semestre</label>
        <select class="form-control" v-model="semestre" id="semestre">
          <option selected>Seleccione</option>
          <option value="1">Primero</option>
          <option value="2">Segundo</option>
          <option value="3">Tercero</option>
          <option value="4">Cuarto</option>
          <option value="5">Quinto</option>
          <option value="6">Sexto</option>
          <option value="7">Séptimo</option>
          <option value="8">Octavo</option>
          <option value="9">Noveno</option>
          <option value="10">Décimo</option>
        </select>
      </div>

      <button type="button" class="button" @click="suscribirse">Suscribirse</button>
    </form>
    <div v-if="msj" class="alert alert-primary alert-dismissible fade show" role="alert">
      {{ mensaje }}
      <button type="button" class="btn-close" aria-label="Close" @click="cerrarAlert"></button>

    </div>
  </div>
</template>

<script>
import { ingresarSuscripcionFachada } from "../helpers/SuscripcionCliente.js"
export default {
  data() {
    return {
      nombreEstudiante: '',
      apellidoEstudiante: '',
      cedulaEstudiante: '',
      correoElectronico: '',
      semestre: '',
      msj: false,
      mensaje: ""
    };
  },
  methods: {
    cerrarAlert() {
      this.msj = false;
    },
    validar() {

      if (this.nombreEstudiante != '' && this.apellidoEstudiante!='' && this.cedulaEstudiante!='' && this.correoElectronico!='' && this.semestre!=''){
        return true
      }
      else{
        return false
      }

       

  },
  async suscribirse() {
    console.log("nombre: " + this.nombreEstudiante)
    if(this.validar()){
      const suscripcion = {
      nombreEstudiante: this.nombreEstudiante,
      apellidoEstudiante: this.apellidoEstudiante,
      cedulaEstudiante: this.cedulaEstudiante,
      correoElectronico: this.correoElectronico,
      semestreEstudiante: this.semestre
    };
    await ingresarSuscripcionFachada(suscripcion);
    this.msj = true
    this.mensaje = "Se ha suscrito a la Asociación de Ciencias"
    }
    else{
      this.msj = true
    this.mensaje = "Rellene todos los datos"
    }
    
  },


  mounted() {
    console.log(this.nombreEstudiante)
  }
}}
</script>

<style scoped>
.button {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 18px;
  color: rgb(193, 163, 98);
  border: 2px solid rgb(193, 163, 98);
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: rgb(193, 163, 98);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: #212121;
  scale: 1.1;
  box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
}

.button:active {
  scale: 1;
}
</style>