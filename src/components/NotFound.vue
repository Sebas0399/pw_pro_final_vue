<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Página no encontrada.</p>
        <p class="lead">
          La página que estás buscando no existe
        </p>
        <!-- Utiliza <router-link> en lugar de <a> para enlazar a una ruta específica -->
        <router-link to="/" class="btn btn-primary">Volver</router-link>
      </div>
    </div>
  </template>
  <script>
export default {
    
}
</script>
<style lang="">
    
</style>