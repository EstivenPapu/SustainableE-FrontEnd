<template>
    <div>
      <h3>Tendencia de Capacidad Solar</h3>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  import { getSolarCapacityTrend } from '../services/energyService';
  
  const chart = ref(null);
  onMounted(async () => {
    try {
      const data = await getSolarCapacityTrend();
  
      const labels = data.map(item => item.year);
      const capacities = data.map(item => item.produccion);
  
      new Chart(chart.value, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Capacidad Solar',
              data: capacities,
              borderColor: '#FF6384',
              backgroundColor: 'rgba(255,99,132,0.2)',
              fill: true,
            },
          ],
        },
      });
    } catch (error) {
      console.error('Error al cargar el gráfico:', error);
    }
  });
  </script>
  