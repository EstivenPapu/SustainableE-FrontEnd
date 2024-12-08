<template>
  <nav class="navbar">
    <div class="navbar-left">
      <h1>SustainableEnergy</h1>
      <ul>
        <li><router-link to="/dashboard">Inicio</router-link></li>
        <li><router-link to="/dashboard/buscar">Buscar País</router-link></li>
        <li><router-link to="/dashboard/estadisticas">Estadísticas</router-link></li>
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
      // Verifica si 'user' existe en localStorage antes de parsearlo
      user: this.getUserFromLocalStorage(),
      searchQuery: '', // Control del input de búsqueda
    };
  },
  methods: {
    getUserFromLocalStorage() {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : { username: 'Usuario' }; // Si no hay usuario, devuelve un valor por defecto
    },
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
