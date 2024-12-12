<template>
    <div>
      <h3>Producción por Tipo de Fuente y Región</h3>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  import { getStatsBySourceAndYear } from '../services/energyService';
  
  const chart = ref(null);
  onMounted(async () => {
    try {
      const year = '2021';
      const data = await getStatsBySourceAndYear(year);
  
      const labels = data.map(item => item.pais);
      const productions = data.map(item => item.produccion);
  
      new Chart(chart.value, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Producción por Fuente',
              data: productions,
              backgroundColor: '#4CAF50',
            },
          ],
        },
      });
    } catch (error) {
      console.error('Error al cargar el gráfico:', error);
    }
  });
  </script>
  