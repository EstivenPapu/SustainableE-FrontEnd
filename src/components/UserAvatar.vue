<template>
    <div class="user-avatar" @click="toggleDropdown">
      <!-- Avatar con iniciales o ícono genérico -->
      <div class="avatar">
        <span v-if="initials">{{ initials }}</span>
        <i v-else class="fa fa-user"></i>
      </div>
  
      <!-- Dropdown con opciones (si es necesario) -->
      <div v-if="showDropdown" class="dropdown">
        <p>Hola, {{ username }}</p>
        <button @click="logout">Cerrar Sesión</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserAvatar',
    props: {
      username: {
        type: String,
        default: 'Usuario',
      },
    },
    data() {
      return {
        showDropdown: false,
      };
    },
    computed: {
      initials() {
        return this.username
          .split(' ')
          .map((name) => name.charAt(0).toUpperCase())
          .join('');
      },
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      logout() {
        localStorage.removeItem('user');
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .user-avatar {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #4caf50;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
  }
  
  .dropdown {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1000;
  }
  
  .dropdown button {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .dropdown button:hover {
    background-color: #d32f2f;
  }
  </style>
  