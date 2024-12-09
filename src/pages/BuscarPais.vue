<template>
  <div class="search-container">
    <h2>Buscar País</h2>

    <!-- Campo de búsqueda -->
    <input
      v-model="searchQuery"
      @input="handleSearch"
      type="text"
      placeholder="Ingresa el nombre del país"
      class="search-input"
    />

    <!-- Mostrar error si no se encuentra el país -->
    <p v-if="error" class="error">{{ error }}</p>

    <!-- Mostrar los resultados de búsqueda -->
    <div v-if="countryData.length > 0" class="result">
      <div v-for="(data, index) in countryData" :key="index" class="country-card">
        <h3>{{ data.pais }} - {{ data.year }}</h3>
        <p><strong>Producción:</strong> {{ data.produccion }} TWh</p>
        <p>
          <strong>Fuente de Energía:</strong> {{ data.fuenteDeEnergia.nombre }}
          ({{ data.fuenteDeEnergia.descripcion }})
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getCountryByName } from '../services/energyService'; // Asegúrate de que la función esté importada correctamente

// Definir el estado
const searchQuery = ref(''); // Valor de búsqueda del usuario
const countryData = ref([]); // Para almacenar los datos del país
const error = ref(null); // Para almacenar mensajes de error

// Función para manejar la búsqueda
const handleSearch = async () => {
  if (searchQuery.value.trim()) {
    try {
      // Hacer la llamada a la API para obtener los datos del país
      const response = await getCountryByName(searchQuery.value);

      // Verificar que se haya encontrado el país y asignar los datos
      if (response.length > 0) {
        countryData.value = response; // Suponiendo que el backend devuelve una lista
        error.value = null; // Limpiar el error si se encuentra el país
      } else {
        error.value = 'No se encontró el país.';
        countryData.value = [];
      }
    } catch (err) {
      // Si hay un error al hacer la solicitud
      error.value = 'Hubo un error al realizar la búsqueda.';
      countryData.value = [];
      console.error('Error al buscar el país:', err);
    }
  } else {
    // Si el campo de búsqueda está vacío, limpiar resultados
    countryData.value = [];
    error.value = null;
  }
};
</script>

<style scoped>
.search-container {
  text-align: center;
  margin: 20px;
}

.search-input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}

.result {
  margin-top: 20px;
}

.country-card {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.country-card h3 {
  margin: 0;
  font-size: 20px;
}

.country-card p {
  margin: 5px 0;
}
</style>
