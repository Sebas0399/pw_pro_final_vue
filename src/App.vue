<template>
   <HelloWorld v-if="isHomePage"/>
   <!-- <HelloWorld/> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">UCE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Noticias
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li> <router-link to="/noticias" class="dropdown-item">Visualizar</router-link>
              </li>
              <li><router-link to="/noticiasInsertar" class="dropdown-item">Administrar</router-link></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Foros
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li> <router-link to="/foros" class="dropdown-item">Visualizar</router-link>
              </li>
              <li><router-link to="/forosInsertar" class="dropdown-item">Administrar</router-link></li>
            </ul>
          </li>

        </ul>

      </div>
    </div>
  </nav>

  <router-view />
  <img v-if="isHomePage" src="./assets/img/logoUceWhite.png" class="center-image">


</template>
<script>
import HelloWorld from "./modules/foro/components/HelloWorld.vue"
export default {
  components: { 
    HelloWorld 
  },
computed:{
  isHomePage(){
    return this.$route.path === "/";
  }
}
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
