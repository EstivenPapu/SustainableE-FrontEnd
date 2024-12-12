<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img class="navbar-title" src="../assets/images/logo.png" alt="Logo">
    </div>

    <div class="navbar-center">
      <ul class="navbar-menu">
        <li><router-link to="/dashboard/inicio" active-class="active-link">Inicio</router-link></li>
        <li><router-link to="/dashboard/search" active-class="active-link">Buscar País</router-link></li>
        <li><router-link to="/dashboard/stats" active-class="active-link">Estadísticas</router-link></li>
        <li><router-link to="/dashboard/energia-tipos" active-class="active-link">Aprende sobre Energía</router-link></li>
      </ul>
    </div>

    <div class="navbar-right">
      <UserAvatar/>
    </div>
  </nav>
</template>

<script setup>
import UserAvatar from './UserAvatar.vue';
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    background-color: var(--color-secondary);
    color: var(--color-white);
    position: sticky;
    top: 0;
    z-index: 1000;
    flex-wrap: wrap;
  }
  
  .navbar-left, .navbar-center, .navbar-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .navbar-left {
    justify-content: flex-start;
  }
  
  .navbar-right {
    width: 350px;
    animation: fadeIn 2s ease-in-out;
    justify-content: flex-end;
  }
  
  .navbar-title {
    width: 250px;
    margin: 20px;
  }
  
  .navbar-menu {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    gap: 20px;
    margin-bottom: 0;
    padding: 0;
  }
  
  .navbar-menu li {
    height: 30px;
    margin-top: 150px;
    display: inline-block;
  }
  
  .navbar-menu a {
    color: var(--color-white);
    text-decoration: none;
    padding: 15px 10px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .user-avatar-container{
    margin-right: 30px;
  }
    
  .navbar-menu a:hover {
    background-color: var(--color-background);
    color: var(--color-secondary);
    border-radius: 5px;
    transform: scale(1.1);
  }
  
  .navbar-menu .active-link {
    font-weight: bold;
    background-color: var(--color-background);
    color: var(--color-secondary);
    border-radius: 5px;
  }
  
  /* Diseño adaptable */
  @media (max-width: 955px) {
    .navbar {
      flex-direction: column;
      align-items: center;
    }
  
    .navbar-left, .navbar-center, .navbar-right {
      flex-direction: column;
      align-items: center;
    }
  
    .navbar-menu {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
