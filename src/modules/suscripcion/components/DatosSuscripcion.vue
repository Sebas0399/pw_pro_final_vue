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

    <button type="button" class="btn btn-primary" @click="suscribirse">Suscribirse</button>
  </form>
  <div v-if="msj" class="alert alert-primary" role="alert">
    {{mensaje}}
</div>
</div>

</template>

<script>
import {ingresarSuscripcionFachada} from "../helpers/SuscripcionCliente.js"
export default {
    data() {
  return {
    nombreEstudiante: '',
    apellidoEstudiante: '',
    cedulaEstudiante: '',
    correoElectronico: '',
    semestre: '',
    msj:false,
    mensaje:""
  };
},
methods:{
  async suscribirse(){
    console.log("nombre: "+this.nombreEstudiante)
    const suscripcion = {
      nombreEstudiante: this.nombreEstudiante,
      apellidoEstudiante: this.apellidoEstudiante,
      cedulaEstudiante: this.cedulaEstudiante,
      correoElectronico: this.correoElectronico,
      semestreEstudiante: this.semestre
    };
    await ingresarSuscripcionFachada(suscripcion);
    this.msj=true
    this.mensaje="Se ha suscrito a la Asociaci'on de Ciencias"
  }
}, 
mounted(){
  console.log(this.nombreEstudiante)
}
}
</script>

<style>
</style>