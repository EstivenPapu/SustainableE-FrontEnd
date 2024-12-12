<template>
  <div>
    <h3>Porcentaje de Energía Renovable por País</h3>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { getRenewablePercentage } from '../services/energyService';

const chart = ref(null);

onMounted(async () => {
  try {
    const year = '2021';
    const consumoTotal = 100000;

    const data = await getRenewablePercentage(year, consumoTotal);

    const labels = data.map(item => item.pais);
    const percentage = data.map(item => item.porcentaje);

    new Chart(chart.value, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Porcentaje de Energía Renovable',
            data: percentage, 
            backgroundColor: '#4CAF50', 
            borderColor: '#388E3C', 
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
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