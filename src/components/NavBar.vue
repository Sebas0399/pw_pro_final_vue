<template>
    <div>
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

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Acercamiento con el Estudiante
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li> <router-link to="/suscribirse" class="dropdown-item">Suscripción Aso</router-link>
              </li>
              <li><router-link to="/queja" class="dropdown-item">Quejas</router-link></li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</div>
  <router-view />
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>