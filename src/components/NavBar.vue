<template>
    <nav class="navbar">
      <div class="navbar-left">
        <h1>SustainableEnergy</h1>
        <ul>
          <li><router-link to="/dashboard">Inicio</router-link></li>
          <li><router-link to="/dashboard/search">Buscar País</router-link></li>
          <li><router-link to="/dashboard/stats">Estadísticas</router-link></li>
        </ul>
      </div>
  
      <div class="navbar-right">
        <!-- Input para búsqueda inmediata -->
        <input type="text" placeholder="Buscar país..." v-model="searchQuery" @keyup.enter="performQuickSearch" />
  
        <!-- Avatar del usuario -->
        <UserAvatar :username="user.username" />
  
        <!-- Botón de cerrar sesión -->
        <button @click="logout">Cerrar Sesión</button>
      </div>
    </nav>
  </template>
  
  <script>
  import UserAvatar from './UserAvatar.vue';

export default {
  components: { UserAvatar },
  data() {
    return {
      // Revisa si el valor existe en localStorage antes de parsearlo
      user: JSON.parse(localStorage.getItem('user')) || { username: 'Usuario' },
      searchQuery: '', // Control del input de búsqueda
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/');
    },
    performQuickSearch() {
      console.log(`Buscando país: ${this.searchQuery}`);
    },
  },
};
  </script>
  