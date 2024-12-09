<template>
    <div class="inicio-container">
      <h1>Bienvenido a SustainableEnergy</h1>
      <p>Esta plataforma te permite explorar y gestionar datos sobre la producción y el consumo de energía renovable globalmente.</p>
      
      <div class="funcionalidades">
        <div>
          <h3>Explora las estadísticas</h3>
          <p>Consulta información detallada sobre la producción de energías renovables en diferentes regiones.</p>
          <router-link to="/dashboard/stats" class="btn">Ver Estadísticas</router-link>
        </div>
        <div>
          <h3>Tipos de Energía Renovable</h3>
          <p>Aprende sobre las fuentes de energía limpia como solar, eólica e hidráulica.</p>
          <router-link to="/dashboard/energia-tipos" class="btn">Ver Más</router-link>
        </div>
      </div>
  
      <div class="educacion">
        <h3>¿Por qué es importante la transición energética?</h3>
        <p>Las energías renovables son clave para un futuro sostenible. Aquí puedes aprender sobre el impacto positivo de las fuentes limpias.</p>
        <router-link to="/dashboard/energia-info" class="btn">Leer Más</router-link>
      </div>
  
      <div class="estadisticas">
        <h3>Producción de Energía Renovable Global</h3>
        <p>A continuación se muestran las últimas estadísticas sobre la producción mundial de energías renovables.</p>
        <PorcentajeRenovable /> <!-- Componente de gráfico con las estadísticas -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PorcentajeRenovable from './PorcentajeRenovable.vue'; // Componente de gráfico para mostrar estadísticas
  </script>
  
  <style scoped>
  .inicio-container {
    padding: 20px;
    text-align: center;
  }
  
  .funcionalidades {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .funcionalidades div {
    width: 45%;
  }
  
  .educacion, .estadisticas {
    margin-top: 40px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .btn:hover {
    background-color: #45a049;
  }
  </style>
  