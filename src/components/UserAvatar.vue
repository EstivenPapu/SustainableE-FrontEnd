<template>
  <div class="user-avatar-container">
    <!-- Avatar del usuario -->
    <div class="avatar" @click="toggleDropdown">
      {{ username.charAt(0).toUpperCase() }}
    </div>

    <!-- Menú desplegable -->
    <ul v-if="showDropdown" class="dropdown-menu">
      <!-- Información del usuario -->
      <li v-if="user && user.username">
        <strong>Usuario:</strong> {{ user.username }}
      </li>
      <li v-if="user && user.nombre">
        <strong>Nombre:</strong> {{ user.nombre }}
      </li>
      <li v-if="user && user.email">
        <strong>Email:</strong> {{ user.email }}
      </li>
      <li v-else class="loading">Cargando información...</li>

      <!-- Botón de cerrar sesión -->
      <li>
        <button @click="logout" class="logout-button">Cerrar sesión</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getUserById } from "../services/userService";

// Estado para el menú desplegable y la información del usuario
const showDropdown = ref(false);
const user = ref(null);
const username = ref("");

// Obtener la información del usuario almacenada
const storedUser = JSON.parse(localStorage.getItem("user"));
username.value = storedUser?.username || "U"; // Inicial por defecto

// Función para alternar el menú desplegable
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Función para cerrar sesión
const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};

// Obtener la información completa del usuario
onMounted(async () => {
  if (storedUser?.id) {
    try {
      const response = await getUserById(storedUser.id);
      if (response) {
        user.value = response;
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
/* Contenedor principal */
.user-avatar-container {
  position: relative;
  display: inline-block;
}

/* Estilo del avatar */
.avatar {
  width: 50px;
  height: 50px;
  background-color: var(--color-secondary);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.avatar:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Menú desplegable */
.dropdown-menu {
  position: absolute;
  top: 60px;
  color: black;
  right: 0;
  background-color: var(--color-white);
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 250px;
  z-index: 1000;
  list-style: none;
  animation: fadeIn 0.3s ease-in-out;
}

/* Elementos de la lista */
.dropdown-menu li {
  font-size: 14px;
  margin-bottom: 10px;
}

.dropdown-menu li:last-child {
  margin-bottom: 0;
}

.loading {
  text-align: center;
  font-style: italic;
  color: var(--color-accent);
}

/* Botón de cerrar sesión */
.logout-button {
  width: 100%;
  padding: 10px;
  background-color: var(--color-hover);
  color: var(--color-white);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.logout-button:hover {
  background-color: var(--color-secondary);
  transform: translateY(-2px);
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
