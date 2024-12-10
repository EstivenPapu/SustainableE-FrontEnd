<template>
  <div class="estadisticas-container">
    <h2>Estadísticas de Producción de Energía</h2>
    
    <!-- Navegación entre gráficos -->
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        @click="currentTab = tab.name"
        :class="{ active: currentTab === tab.name }"
      >
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
/* Contenedor principal */
.estadisticas-container {
  padding: 20px;
  background-color: var(--color-background);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-in-out;
}

h2 {
  color: var(--color-secondary);
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

/* Pestañas */
.tabs {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
}

.tabs button {
  padding: 12px 25px;
  border: none;
  cursor: pointer;
  background-color: var(--color-accent);
  color: var(--color-text);
  font-size: 1.1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.tabs button:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
  transform: scale(1.1);
}

.tabs button.active {
  background-color: var(--color-secondary);
  color: var(--color-white);
  font-weight: bold;
}

/* Contenido de las pestañas */
.tab-content {
  margin-top: 30px;
  text-align: center;
  background-color: var(--color-white);
  padding: 20px;
  border-radius: 10px;
}

/* Animaciones */
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
