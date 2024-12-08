<template>
    <div class="register-container">
      <h2>Registrarse</h2>
      <form @submit.prevent="handleRegister">
        <!-- Nombre Completo -->
        <div>
          <label for="fullname">Nombre Completo</label>
          <input type="text" id="fullname" v-model="fullname" placeholder="Ingresa tu nombre completo" required/>
        </div>
  
        <!-- Correo Electrónico -->
        <div>
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" placeholder="Ingresa tu correo electrónico" required/>
        </div>
  
        <!-- Nombre de Usuario -->
        <div>
          <label for="username">Nombre de Usuario</label>
          <input type="text" id="username" v-model="username" placeholder="Ingresa tu nombre de usuario" required/>
        </div>
  
        <!-- Contraseña -->
        <div>
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" placeholder="Ingresa tu contraseña" required/>
        </div>
  
        <!-- Confirmar Contraseña -->
        <div>
          <label for="confirmPassword">Confirmar Contraseña</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirma tu contraseña" required/>
        </div>
  
        <!-- Error de Contraseña No Coincidente -->
        <p v-if="password !== confirmPassword && confirmPassword !== ''" class="error">
          Las contraseñas no coinciden
        </p>
  
        <button type="submit" :disabled="password !== confirmPassword || !email || !fullname || !username || !password || !confirmPassword">Registrarse</button>
      </form>
  
      <p>¿Ya tienes cuenta? <router-link to="/">Iniciar sesión</router-link></p>
    </div>
  </template>
  
  <script>
  import { registerUser } from '../services/userService';
  export default {
    data() {
      return {
        fullname: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async handleRegister() {
        // Verificar que las contraseñas coinciden
        if (this.password !== this.confirmPassword) {
            this.error = "Las contraseñas no coinciden";
            return;
        }
        try {
            const response = await registerUser(this.fullname, this.email, this.username, this.password);
            console.log('Usuario registrado:', response);

            // Redirigir al login después de un registro exitoso
            this.$router.push('/');
        } catch (err) {
            this.error = 'Hubo un error al registrar el usuario';
            console.error(err);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  