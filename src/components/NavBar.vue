<template>
  <nav class="navbar">
    <div class="navbar-left">
      <!-- Título con efecto de destello -->
      <h1 class="navbar-title">SustainableEnergy</h1>
      <ul class="navbar-menu">
        <li><router-link to="/dashboard/inicio" active-class="active-link">Inicio</router-link></li>
        <li><router-link to="/dashboard/search" active-class="active-link">Buscar País</router-link></li>
        <li><router-link to="/dashboard/stats" active-class="active-link">Estadísticas</router-link></li>
        <li><router-link to="/dashboard/energia-tipos" active-class="active-link">Aprende sobre Energía</router-link></li>
      </ul>
    </div>

    <div class="navbar-right">
      <!-- Avatar del usuario -->
      <UserAvatar :username="user.username" />
    </div>
  </nav>
</template>

<script setup>
import UserAvatar from './UserAvatar.vue';

const user = JSON.parse(localStorage.getItem('user')) || { username: 'Usuario' };
</script>

<style scoped>
/* Estilos generales del navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: var(--color-secondary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Título del navbar */
.navbar-title {
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  color: var(--color-white);
  text-transform: uppercase;
  animation: titleGlow 2s infinite ease-in-out;
}

/* Efecto de destello */
@keyframes titleGlow {
  0%, 100% {
    text-shadow: 0 0 10px var(--color-secondary), 0 0 20px var(--color-secondary);
  }
  50% {
    text-shadow: 0 0 15px var(--color-hover), 0 0 30px var(--color-secondary);
  }
}

/* Menú del navbar */
.navbar-menu {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  display: inline-block;
  position: relative;
}

/* Links del menú */
.navbar-menu a {
  color: var(--color-white);
  text-decoration: none;
  padding: 5px 10px;
  position: relative;
  transition: color 0.3s ease;
}

.navbar-menu a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 3px;
  width: 0;
  background-color: var(--color-white);
  transition: width 0.3s ease;
}

.navbar-menu a:hover::after,
.navbar-menu .active-link::after {
  width: 100%;
}

/* Estado activo del link */
.active-link {
  color: var(--color-hover);
  font-weight: bold;
}

/* Animación al hacer hover */
.navbar-menu a:hover {
  color: var(--color-accent);
}

/* Estilo del lado derecho */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
