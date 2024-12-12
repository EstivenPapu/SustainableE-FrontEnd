<template>
  <div class="account-management-container">
    <h2>Administración de Cuenta</h2>
  
    <section>
      <div class="user-info">
        <h3>Información Personal</h3>
        <p><strong>Nombre:</strong> {{ user.nombre }} </p>
        <p><strong>Correo Electrónico:</strong> {{ user.email }}</p>
        <p><strong>Usuario:</strong> {{ user.username }}</p>
        <button @click="toggleEditForm" class="action-button">Editar Perfil</button>
      </div>
  
      <div v-if="showEditForm" class="edit-form">
        <h3>Editar Perfil</h3>
        <form @submit.prevent="updateProfile">
          <label for="nombre">Nombre Completo:</label>
          <input type="text" id="nombre" v-model="editedUser.nombre" required />

          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="editedUser.email" required />

          <label for="username">Nombre de Usuario:</label>
          <input type="text" id="username" v-model="editedUser.username" required />
  
          <label for="password">Contraseña:</label>
          <div class="password-container">
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="editedUser.password" required />
            <button type="button" @click="togglePasswordVisibility" class="toggle-password-button">
              {{ showPassword ? 'Ocultar' : 'Mostrar' }}
            </button>
          </div>

          <button type="submit" class="save-button">Guardar Cambios</button>

        </form>
      </div>
  
      <div class="delete-account">
        <button @click="deleteAccount" class="delete-button">Eliminar Cuenta</button>
      </div>

    </section>
  </div>
</template>
  
<script setup>
  import { ref, onMounted } from "vue";
  import { getUserById, updateUser, deleteUser } from "../services/userService";
  
  const user = ref({});
  const editedUser = ref({});
  const showEditForm = ref(false);
  const showPassword = ref(false);
  
  const storedUser = JSON.parse(localStorage.getItem("user"));
  
  // Modo editar perfil
  const toggleEditForm = () => {
    showEditForm.value = !showEditForm.value;
    if (showEditForm.value) {
      editedUser.value = { ...user.value };
    }
  };
  
  // Alternar visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };
  
  // Actualizar perfil
  const updateProfile = async () => {
    try {
      const response = await updateUser(storedUser.id, editedUser.value);
      if (response) {
        user.value = { ...editedUser.value }; // Actualizar la vista
        showEditForm.value = false;
        alert("Perfil actualizado exitosamente.");
      }
    } catch (err) {
      console.error("Error al actualizar el perfil:", err);
      alert("Hubo un error al actualizar el perfil.");
    }
  };
  
  // Eliminar cuenta
  const deleteAccount = async () => {
    if (confirm("¿Estás seguro de que quieres eliminar tu cuenta?")) {
      try {
        await deleteUser(storedUser.id);
        localStorage.removeItem("user");
        window.location.href = "/";
      } catch (err) {
        console.error("Error al eliminar la cuenta:", err);
        alert("Hubo un error al eliminar la cuenta.");
      }
    }
  };
  
  // Obtener información del usuario al cargar
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
  .account-management-container {
    margin: 40px auto;
    padding: 30px;
    max-width: 700px;
    background-color: var(--color-background);
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.8s ease-in-out;
  }
  
  h2 {
    text-align: center;
    font-size: 2.2rem;
    color: var(--color-secondary);
    margin-bottom: 20px;
  }
  
  .user-info {
    padding: 20px;
    background-color: var(--color-accent);
    border-radius: 8px;
    margin-bottom: 20px;
  }
  
  .user-info h3 {
    margin-bottom: 10px;
    color: var(--color-secondary);
  }
  
  .user-info p {
    margin: 5px 0;
    font-size: 1rem;
  }
  
  .edit-form {
    background-color: var(--color-primary);
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: var(--color-text);
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid var(--color-accent);
    border-radius: 5px;
    transition: box-shadow 0.3s;
  }
  
  input:focus {
    box-shadow: 0 0 5px var(--color-secondary);
    outline: none;
  }
  
  .password-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .toggle-password-button {
    padding: 8px;
    margin-bottom: 15px;
    background-color: var(--color-hover);
    color: var(--color-white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;
  }
  
  .toggle-password-button:hover {
    background-color: var(--color-secondary);
  }
  
  .action-button,
  .save-button,
  .delete-button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    transition: transform 0.2s, background-color 0.3s;
  }
  
  .action-button {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }
  
  .action-button:hover {
    background-color: var(--color-hover);
    transform: scale(1.05);
  }
  
  .save-button {
    background-color: var(--color-hover);
    color: var(--color-white);
  }
  
  .save-button:hover {
    background-color: var(--color-accent);
    color: var(--color-white);
    transform: scale(1.05);
  }
  
  .delete-button {
    background-color: var(--color-hover);
    color: var(--color-white);
    margin-top: 20px;
    margin-left: 33rem;
  }
  
  .delete-button:hover {
    background-color: var(--color-secondary);
    transform: scale(1.05);
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
</style>
  