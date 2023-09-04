<template>
  
  <NavBar ></NavBar>
  
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
#footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
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
</style>
