<template>
    <div v-if="showConfirmation">
      <p>Tu queja ha sido enviada con éxito. Gracias por tus comentarios.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showConfirmation: Boolean
    }
  };
  </script>
  <style scoped>
  .confirmation-message {
    background-color: #28a745;
    color: white;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    margin-top: 20px;
  }
  </style>