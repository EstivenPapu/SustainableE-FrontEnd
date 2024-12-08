
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    beforeCreate() {
      const isAuthenticated = localStorage.getItem('token'); // Verifica si el token está presente
      if (!isAuthenticated && this.$route.name !== 'Login') {
        this.$router.push('/'); // Redirige a la página de login si no está autenticado
      }
    },
  });
</script>
  
<style scoped>

</style>
