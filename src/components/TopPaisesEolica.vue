<template>
  <div>
    <h3>Top 10 Países por Producción de Energía Eólica</h3>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { getTop10WindProduction } from '../services/energyService';

const chart = ref(null);

onMounted(async () => {
  try {
    const year = '2021'; // Cambia por el año deseado
    const data = await getTop10WindProduction(year);

    const labels = data.map(item => item.pais);
    const productions = data.map(item => item.produccion);

    new Chart(chart.value, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Producción Eólica',
            data: productions,
            backgroundColor: '#36A2EB',
          },
        ],
      },
      options: {
        indexAxis: 'y', // Esto cambia la orientación a horizontal
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });
  } catch (error) {
    console.error('Error al cargar el gráfico:', error);
  }
});
</script>

<style scoped>

</style>
