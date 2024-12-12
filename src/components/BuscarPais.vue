<template>
  <div class="search-container">
    <h2>Buscar País</h2>
    
    <input v-model="searchQuery" @input="filterCountries" type="text" placeholder="Busca un país..." class="search-input"/>
    
    <table v-if="filteredCountries.length > 0" class="country-table">
      <thead>
        <tr>
          <th>País</th>
          <th>Producción</th>
          <th>Fuente de Energía</th>
          <th>Año</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(country, index) in filteredCountries" :key="index">
          <td>{{ country.pais }}</td>
          <td>{{ country.produccion }} TWh</td>
          <td>{{ country.fuenteDeEnergia.nombre }}</td>
          <td>{{ country.year }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>No se encontraron países que coincidan con la búsqueda.</p>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAllCountries } from '../services/energyService';

const countries = ref([]);
const filteredCountries = ref([]);
const searchQuery = ref('');


onMounted(async () => {
  try {
    const response = await getAllCountries();
    countries.value = response;
    filteredCountries.value = response.sort((a, b) => a.pais.localeCompare(b.pais)); 
  } catch (err) {
    console.error("Error al cargar los países:", err);
  }
});

const filterCountries = () => {
  filteredCountries.value = countries.value
    .filter(country =>
      country.pais.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .sort((a, b) => a.pais.localeCompare(b.pais)); 
};
</script>

<style scoped>
  .search-container {
    padding: 20px;
    background-color: var(--color-background);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.8s ease-in-out;
  }
  
  h2 {
    font-size: 2rem;
    color: var(--color-secondary);
    margin-bottom: 20px;
    text-align: center;
  }
  
  .search-input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid var(--color-accent);
    border-radius: 5px;
    margin-bottom: 20px;
    outline: none;
    transition: 0.3s ease;
  }
  
  .search-input:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 5px var(--color-secondary);
  }
  
  .country-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    text-align: left;
  }
  
  .country-table th,
  .country-table td {
    padding: 10px;
    border: 1px solid var(--color-accent);
  }
  
  .country-table th {
    background-color: var(--color-primary);
    color: white;
  }
  
  .country-table tr:nth-child(even) {
    background-color: var(--color-accent);
  }
  
  .country-table tr:hover {
    background-color: var(--color-secondary);
    color: white;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
