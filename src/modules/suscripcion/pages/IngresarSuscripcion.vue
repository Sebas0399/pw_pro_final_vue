<template>
   <header class="header-container">
  <div class="background-image">
    <img src="@/assets/images/aso3.jpg" alt="">
  </div>
  <div class="text-overlay">
    <h2>Inscripción AsoCiencias</h2>
  </div>
</header>

    <DatosSuscripcion/>

</template>

<script>
import DatosSuscripcion from '../components/DatosSuscripcion.vue';
export default {
    components:{
        DatosSuscripcion
    }
}
</script>


<style>
</style>