<template>
  <div class="login-container">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Nombre de usuario</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Ingresa tu nombre de usuario"
          required
        />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
    <p>No tienes cuenta? <router-link to="/register">Registrarse</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { loginUser } from '../services/userService'; // Llamada al servicio
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref(null);
const router = useRouter();

const handleLogin = async () => {
  try {
    // Realiza la llamada al servicio con el username y password
    const response = await loginUser(username.value, password.value);
    
    if (response.status === 'Y') {
      error.value = null; // Limpiar errores
      console.log('Usuario autenticado, ID:', response.Id); // Solo ID recibido

      // Guardar el ID del usuario en localStorage
      localStorage.setItem('user', JSON.stringify({ id: response.Id }));

      // Redirigir al Dashboard después del login exitoso
      router.push('/dashboard');
    } else {
      error.value = 'Credenciales incorrectas'; // Si las credenciales no son válidas
    }
  } catch (err) {
    error.value = 'Hubo un error al intentar iniciar sesión';
    console.error(err);
  }
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>
