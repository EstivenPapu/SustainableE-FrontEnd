<template>
  <div class="login-container">
    
    <h2>Iniciar sesión</h2>
    
    <form class="login-form" @submit.prevent="handleLogin">
      
      <div class="input-group">
        <div class="img-container">
          <img class="usuario" src="../assets/images/usuario.png" alt="Usuario" />
        </div>
        
        <label for="username">Nombre de usuario</label>
        <input type="text" id="username" v-model="username" placeholder="Ingresa tu nombre de usuario" required/>
      </div>

      <div class="input-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" placeholder="Ingresa tu contraseña" required/>
      </div>

      <button type="submit" class="login-button">Iniciar sesión</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>

    <p class="register-link">
      ¿No tienes cuenta? <router-link to="/register">Registrarse</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { loginUser } from "../services/userService";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await loginUser(username.value, password.value);

    if (response.status === "Y") {
      error.value = null;
      localStorage.setItem("user", JSON.stringify({ id: response.Id }));
      router.push("/dashboard/inicio");
    } else {
      error.value = "Credenciales incorrectas";
    }
  } catch (err) {
    error.value = "Hubo un error al intentar iniciar sesión";
    console.error(err);
  }
};
</script>

<style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--color-background);
    padding: 20px;
  }
  
  h2 {
    color: var(--color-secondary);
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
    animation: fadeIn 0.8s ease-in-out;
  }
  
  .login-form {
    width: 100%;
    max-width: 400px;
    background-color: var(--color-primary);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.8s ease-in-out;
  }
  
  .input-group {
    margin-bottom: 15px;
    position: relative;
  }
  
  .img-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .img-container .usuario {
    width: 80px;
    height: 80px;
  }
  
  .input-group label {
    font-size: 1rem;
    color: var(--color-secondary);
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid var(--color-accent);
    border-radius: 5px;
    outline: none;
    transition: 0.3s ease;
  }
  
  .input-group input:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 5px var(--color-secondary);
  }
  
  .login-button {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    background-color: var(--color-secondary);
    color: var(--color-white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .login-button:hover {
    background-color: var(--color-accent);
    transform: translateY(-2px);
  }
  
  .error {
    color: var(--color-hover);
    margin-top: 10px;
    font-weight: bold;
  }
  
  .register-link {
    margin-top: 15px;
    font-size: 0.9rem;
    color: var(--color-secondary);
  }
  
  .register-link a {
    color: var(--color-secondary);
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .register-link a:hover {
    color: var(--color-hover);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
