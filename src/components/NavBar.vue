<template>
  <nav class="navbar">
    <div class="navbar-left">
      <h1>SustainableEnergy</h1>
      <ul>
        <li><router-link to="/dashboard/inicio">Inicio</router-link></li>
        <li><router-link to="/dashboard/search">Buscar País</router-link></li>
        <li><router-link to="/dashboard/stats">Estadísticas</router-link></li>
        <li><router-link to="/dashboard/energia-tipos">Aprende sobre Energía</router-link></li>
      </ul>
    </div>

    <div class="navbar-right">
      <!-- Avatar del usuario -->
      <UserAvatar :username="user.username"/>
    </div>
  </nav>
</template>

<script setup>
import UserAvatar from './UserAvatar.vue';

const user = JSON.parse(localStorage.getItem('user')) || { username: 'Usuario' };


</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
}

.navbar h1 {
  margin: 0;
  font-size: 24px;
}

.navbar-left ul {
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
  margin: 0;
}

.navbar-left li {
  display: inline-block;
}

.navbar-left a {
  color: white;
  text-decoration: none;
}

.navbar-left a:hover {
  text-decoration: underline;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.navbar-right button {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.navbar-right button:hover {
  background-color: #d32f2f;
}
</style>
