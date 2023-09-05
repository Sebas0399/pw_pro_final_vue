<template>
  <!-- <Error/> -->
  <Home v-if="isHomePage"/>
  <img v-if="isHomePage" src="./assets/images/UceWhite.png" class="center-image">
  <NavBar ></NavBar>

  <footer>
    <div class="footContent">
    <div class="footImg">
      <img src="./assets/images/uceLogoW.png" alt="">
    </div>
    <div class="footText">
     
    <h3>Universidad Central del Ecuador</h3>
    <h3>Facultad de Ingeniería y Ciencias Aplicadas</h3>
    <h3>Carrera Computación</h3>
    
    <h6>UCE © Todos los derechos reservados</h6>

    </div>
  </div>
  </footer>
  
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/components/Home.vue'
import Error from '@/components/404Error.vue'

export default {
  components: {
    NavBar,
    Home,
    Error
  },
  computed:{
  isHomePage(){
    return this.$route.path === "/";
  }
}
  }
</script>
<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color: cornflowerblue;
}

.center-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  max-width: 50%;
  max-height: 50%;
}
</style>
