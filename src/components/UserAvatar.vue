<template>
  <div class="user-avatar-container">
    <div class="avatar" @click="toggleDropdown">
      <img src="../assets/images/Avatar.png" alt="">
    </div>

    <ul v-if="showDropdown" class="dropdown-menu">
      <li class="greeting">
        Hola, <strong>{{ user?.nombre || username }}</strong>
      </li>
      <li>
        <button @click="navigateToAccount" class="action-button">Administrar cuenta</button>
      </li>
      <li>
        <button @click="logout" class="action-button logout-button">Cerrar sesión</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { getUserById } from "../services/userService";

  const showDropdown = ref(false);
  const user = ref(null);
  const username = ref("");
  const router = useRouter();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  username.value = user.value?.username || "U";

  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };

  const navigateToAccount = () => {
    showDropdown.value = !showDropdown.value;
    router.push("/dashboard/cuenta");
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

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
  .user-avatar-container {
    position: relative;
    display: inline-block;
  }

  .avatar {
    width: 50px;
    height: 50px;
    background-color: var(--color-secondary);
    color: var(--color-white);
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .avatar img{
    width: 3rem;
  }

  .avatar:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .dropdown-menu {
    position: absolute;
    top: 60px;
    right: 0;
    color: black;
    background-color: var(--color-white);
    border: 1px solid var(--color-accent);
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    padding: 15px;
    width: 200px;
    z-index: 1000;
    list-style: none;
    animation: fadeIn 0.3s ease-in-out;
  }

  .dropdown-menu li {
    margin-bottom: 10px;
    font-size: 14px;
  }

  .dropdown-menu li:last-child {
    margin-bottom: 0;
  }

  .greeting {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .action-button {
    width: 100%;
    padding: 8px;
    background-color: var(--color-secondary);
    color: var(--color-white);
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .action-button:hover {
    background-color: var(--color-white);
    color: var(--color-secondary);
    box-shadow: 0px 0px 5px black;
    transform: translateY(-2px);
  }

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
