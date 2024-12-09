<template>
  <div>
    <!-- Incluimos el Navbar -->
    <NavBar></NavBar>

    
  </div>
  <router-view></router-view>
</template>
  
<script setup>
  import NavBar from '../components/NavBar.vue';
  const userId = JSON.parse(localStorage.getItem('user'))?.id;

  if (!userId) {
    console.error('No se encontró un ID de usuario en localStorage. Redirigiendo al login...');
    router.push('/');
  }
  
</script>
  
<style scoped>
  .dashboard-content {
    margin: 20px;
    text-align: center;
  }
</style>
  