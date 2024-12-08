<template>
    <div>
      <canvas id="chart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import Chart from 'chart.js/auto';
  
  const props = defineProps({
    chartData: {
      type: Array,
      required: true,
    },
    chartLabels: {
      type: Array,
      required: true,
    },
  });
  
  const chartInstance = ref(null);
  
  const createChart = () => {
    const ctx = document.getElementById('chart').getContext('2d');
  
    if (chartInstance.value) {
      chartInstance.value.destroy(); // Destruye el gráfico anterior
    }
  
    chartInstance.value = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: props.chartLabels,
        datasets: [
          {
            label: 'Producción de Energía',
            data: props.chartData,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 10)',
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
  };
  
  watch([props.chartData, props.chartLabels], () => {
    if (props.chartData.length > 0 && props.chartLabels.length > 0) {
      createChart();
    }
  });
  
  onMounted(() => {
    createChart();
  });
  </script>
  
  <style scoped>
  canvas {
    max-width: 100%;
    height: auto;
  }
  </style>
  