<template>
    <div>
      <h3>Participación Global de Fuentes de Energía</h3>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  import { getEnergySourcesParticipation } from '../services/energyService';
  
  const chart = ref(null);
  onMounted(async () => {
    try {
      const data = await getEnergySourcesParticipation();
  
      const labels = data.map(item => item.fuenteDeEnergia);
      const participations = data.map(item => item.participacion);
  
      new Chart(chart.value, {
        type: 'pie',
        data: {
          labels,
          datasets: [
            {
              label: 'Participación de Fuentes',
              data: participations,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9F40'],
            },
          ],
        },
      });
    } catch (error) {
      console.error('Error al cargar el gráfico:', error);
    }
  });
  </script>
  