<template>
  <div class="inicio-container">
    <h1>Bienvenido a <span>SustainableEnergy</span></h1>
    <p class="descripcion">
      Esta plataforma te permite explorar y gestionar datos sobre la producción y el consumo de energía renovable globalmente.
    </p>
    
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
import PorcentajeRenovable from './PorcentajeRenovable.vue'; // Componente de gráfico para mostrar estadísticas
</script>

<style scoped>
/* Contenedor principal */
.inicio-container {
  padding: 20px;
  text-align: center;
  background-color: var(--color-background);
  animation: fadeIn 1s ease-in-out;
}

/* Título principal sin animación */
.titulo {
  font-size: 2.5rem;
  color: var(--color-secondary);
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.titulo span {
  color: var(--color-primary);
  text-decoration: underline;
}

/* Descripción */
.descripcion {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 40px;
  animation: fadeIn 2s ease-in-out;
}

/* Estilo para las funcionalidades */
.funcionalidades {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-top: 30px;
}

.funcionalidades div {
  width: 45%;
  background-color: var(--color-primary);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1.5s ease-in-out;
}

.funcionalidades h3 {
  color: var(--color-secondary);
  font-size: 1.5rem;
}

.funcionalidades p {
  color: var(--color-text);
  font-size: 1rem;
}

.funcionalidades .btn {
  margin-top: 10px;
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--color-secondary);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.funcionalidades .btn:hover {
  background-color: var(--color-accent);
  transform: translateY(-2px);
}

/* Sección de educación */
.educacion {
  margin-top: 50px;
  background-color: var(--color-accent);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-in-out;
}

.educacion h3 {
  color: var(--color-primary);
  font-size: 1.8rem;
}

.educacion p {
  color: var(--color-text);
  font-size: 1.2rem;
}

.educacion .btn {
  margin-top: 20px;
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--color-secondary);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.educacion .btn:hover {
  background-color: var(--color-primary);
  transform: translateY(-2px);
}

/* Sección de estadísticas */
.estadisticas {
  margin-top: 50px;
  background-color: var(--color-primary);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2.5s ease-in-out;
}

.estadisticas h3 {
  color: var(--color-secondary);
  font-size: 1.8rem;
}

.estadisticas p {
  color: var(--color-text);
  font-size: 1.2rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
