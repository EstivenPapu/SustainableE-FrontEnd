<template>
  <div>
    <h3>Porcentaje de Energía Renovable por País</h3>
    <!-- Canvas donde se renderiza el gráfico -->
    <canvas ref="chart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';  // Importación de Chart.js
import { getRenewablePercentage } from '../services/energyService'; // Asegúrate de que el servicio esté correcto

const chart = ref(null);

onMounted(async () => {
  try {
    const year = '2022'; // Cambia por el año deseado
    const consumoTotal = 100000; // Este es el consumo total para calcular el porcentaje

    // Obtenemos los datos de porcentaje de energía renovable desde el servicio
    const data = await getRenewablePercentage(year, consumoTotal);

    // Extraemos las etiquetas (países) y los valores de porcentaje
    const labels = data.map(item => item.pais);
    const percentage = data.map(item => item.porcentaje);

    // Creamos el gráfico
    new Chart(chart.value, {
      type: 'bar',  // Tipo de gráfico (barras)
      data: {
        labels: labels,  // Etiquetas (países)
        datasets: [
          {
            label: 'Porcentaje de Energía Renovable',
            data: percentage,  // Los valores de porcentaje
            backgroundColor: '#4CAF50',  // Color de las barras
            borderColor: '#388E3C',  // Color del borde de las barras
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,  // Hacer el gráfico responsive
        scales: {
          y: {
            beginAtZero: true,  // El eje Y empieza en 0
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
/* Agrega estilos aquí si lo deseas */
</style>
