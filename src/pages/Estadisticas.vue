<template>
    <div class="estadisticas-container">
      <h2>Estadísticas de Producción de Energía</h2>
      
      <!-- Navegación entre gráficos -->
      <div class="tabs">
        <button v-for="tab in tabs" :key="tab.name" 
                @click="currentTab = tab.name"
                :class="{ active: currentTab === tab.name }">
          {{ tab.label }}
        </button>
      </div>
  
      <!-- Mostrar el gráfico correspondiente -->
      <div class="tab-content">
        <ProduccionPorFuenteYRegion v-if="currentTab === 'fuente-region'" />
        <PorcentajeRenovable v-if="currentTab === 'porcentaje-renovable'" />
        <TendenciaSolar v-if="currentTab === 'tendencia-solar'" />
        <TopPaisesEolica v-if="currentTab === 'top-eolica'" />
        <FuentesParticipacion v-if="currentTab === 'participacion-fuentes'" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ProduccionPorFuenteYRegion from '../components/ProduccionPorFuenteYRegion.vue';
  import PorcentajeRenovable from '../components/PorcentajeRenovable.vue';
  import TendenciaSolar from '../components/TendenciaSolar.vue';
  import TopPaisesEolica from '../components/TopPaisesEolica.vue';
  import FuentesParticipacion from '../components/FuentesParticipacion.vue';
  
  const currentTab = ref('fuente-region');
  const tabs = [
    { name: 'fuente-region', label: 'Producción por Fuente y Región' },
    { name: 'porcentaje-renovable', label: 'Porcentaje Renovable' },
    { name: 'tendencia-solar', label: 'Tendencia Solar' },
    { name: 'top-eolica', label: 'Top 10 Eólica' },
    { name: 'participacion-fuentes', label: 'Participación de Fuentes' },
  ];
  </script>
  
  <style scoped>
  .estadisticas-container {
    padding: 20px;
  }
  
  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .tabs button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  
  .tabs button.active {
    background-color: #4CAF50;
    color: white;
  }
  
  .tab-content {
    margin-top: 20px;
  }
  </style>
  