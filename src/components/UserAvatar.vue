<template>
  <div class="user-avatar-container">
    <!-- Avatar del usuario -->
    <div class="avatar" @click="toggleDropdown">
      {{ username.charAt(0).toUpperCase() }} <!-- Muestra la inicial del nombre de usuario -->
    </div>
     <!-- Menú desplegable usando una lista -->
     <ul v-if="showDropdown" class="dropdown-menu">
      <!-- Mostrar la información del usuario solo cuando esté disponible -->
      <li v-if="user && user.username"><strong>Nombre de usuario:</strong> {{ user.username }}</li>
      <li v-if="user && user.nombre"><strong>Nombre completo:</strong> {{ user.nombre }}</li>
      <li v-if="user && user.email"><strong>Correo electrónico:</strong> {{ user.email }}</li>
      
      <!-- Mensaje si los datos no están disponibles aún -->
      <li v-else>Cargando información del usuario...</li>

      <!-- Botón para cerrar sesión -->
      <li>
        <button @click="logout" class="logout-button">Cerrar sesión</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUserById } from '../services/userService'

// Estado para el menú desplegable y la información del usuario
const showDropdown = ref(false);
const user = ref(null); // Inicializamos como null para la carga reactiva
const username = ref('');

// Obtener solo el nombre de usuario para mostrar en el avatar
const storedUser = JSON.parse(localStorage.getItem('user'));
username.value = storedUser?.username || 'U'; // Si no hay usuario, se usa 'U' por defecto

// Función para alternar el menú desplegable
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Función para cerrar sesión
const logout = () => {
  localStorage.removeItem('user');
  window.location.href = '/'; // Redirige al inicio de sesión
};

// Obtener la información completa del usuario por su ID
onMounted(async () => {
  if (storedUser?.id) {
    try {
      const response = await getUserById(storedUser.id);
      if (response) {
        user.value = response; // Asignamos la información al objeto user
      } else {
        console.error("No se pudo obtener la información del usuario.");
      }
    } catch (err) {
      console.error("Error al obtener la información del usuario:", err);
    }
  }
});
</script>

<style scoped>
.user-avatar-container {
  position: relative;
  display: inline-block;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #4caf50;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.dropdown-menu {
  color: black;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 200px;
  z-index: 1000;
  list-style-type: none; /* Elimina los puntos de la lista */
}

.dropdown-menu li {
  margin-bottom: 10px;
  font-size: 14px;
}

.logout-button {
  width: 100%;
  padding: 8px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #d32f2f;
}
</style>
