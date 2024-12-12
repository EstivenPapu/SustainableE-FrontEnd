<template>
  <div class="register-container">
    <h2>Registrarse</h2>
    <form class="register-form" @submit.prevent="handleRegister">

      <div class="input-group">
        <div class="img-container">
          <img class="usuario" src="../assets/images/agregar-usuario.png" alt="Usuario"/>
        </div>
        <label for="fullname">Nombre Completo</label>
        <input type="text" id="fullname" v-model="fullname" placeholder="Ingresa tu nombre completo" required/>
      </div>

      <div class="input-group">
        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" v-model="email" placeholder="Ingresa tu correo electrónico" required/>
      </div>

      <div class="input-group">
        <label for="username">Nombre de Usuario</label>
        <input type="text" id="username" v-model="username" placeholder="Ingresa tu nombre de usuario" required/>
      </div>

      <div class="input-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" placeholder="Ingresa tu contraseña" required/>
      </div>

      <div class="input-group">
        <label for="confirmPassword">Confirmar Contraseña</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirma tu contraseña" required/>
      </div>

      <p v-if="password !== confirmPassword && confirmPassword !== ''" class="error">
        Las contraseñas no coinciden
      </p>

      <button type="submit" class="register-button" :disabled="password !== confirmPassword || !email || !fullname || !username || !password || !confirmPassword">Registrarse</button>
    </form>

    <p class="login-link">
      ¿Ya tienes cuenta? <router-link to="/">Iniciar sesión</router-link>
    </p>
  </div>
</template>

<script>
import { registerUser } from "../services/userService";
export default {
  data() {
    return {
      fullname: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.error = "Las contraseñas no coinciden";
        return;
      }
      try {
        const response = await registerUser(
          this.fullname,
          this.email,
          this.username,
          this.password
        );
        console.log("Usuario registrado:", response);

        this.$router.push("/");
      } catch (err) {
        this.error = "Hubo un error al registrar el usuario";
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--color-background);
    padding: 20px;
    box-sizing: border-box;
  }

  h2 {
    color: var(--color-secondary);
    font-size: 2rem;
    margin-bottom: 20px;
    animation: fadeIn 0.8s ease-in-out;
  }

  .register-form {
    width: 100%;
    max-width: 400px;
    background-color: var(--color-primary);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.8s ease-in-out;
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

  .input-group {
    margin-bottom: 15px;
    position: relative;
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

  .register-button {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    background-color: var(--color-secondary);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }

  .register-button:hover {
    background-color: var(--color-accent);
    transform: translateY(-2px);
  }

  .error {
    color: var(--color-hover);
    margin-top: 10px;
    font-weight: bold;
  }

  .login-link {
    margin-top: 15px;
    font-size: 0.9rem;
  }

  .login-link a {
    color: var(--color-secondary);
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s;
  }

  .login-link a:hover {
    color: var(--color-accent);
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