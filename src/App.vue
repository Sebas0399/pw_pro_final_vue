<template>
  
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

export default {
  components: {
    NavBar
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
</style>
