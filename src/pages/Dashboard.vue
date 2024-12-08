<template>
    <div>
      <!-- Incluimos el Navbar -->
      <NavBar></NavBar>
  
      <!-- Área principal del Dashboard -->
      <div class="dashboard-content">
        <h2>Bienvenido al Dashboard</h2>
        <p>Selecciona una opción en el menú para comenzar a explorar los datos.</p>
      </div>
    </div>
    <router-view></router-view>
  </template>
  
  <script setup>
  import NavBar from '../components/NavBar.vue';
  
  
  </script>
  
  <style scoped>
  .dashboard-content {
    margin: 20px;
    text-align: center;
  }
  </style>
  