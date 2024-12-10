<template>
  <div class="energy-types-container">
    <h2>Tipos de Energía Sostenible</h2>

    <!-- Energía Solar -->
    <section class="energy-item">
      <div class="energy-icon">
        <img src="../assets/images/solar.png" alt="Energía Solar" />
      </div>
      <div class="energy-content">
        <h3>1. Energía Solar</h3>
        <p>
          La energía solar es la energía que se obtiene directamente del sol. Existen dos tipos principales: la energía solar fotovoltaica (que convierte la luz solar en electricidad) y la energía solar térmica (que utiliza el calor del sol para calentar agua).
        </p>
      </div>
    </section>
    <div class="separator"></div>

    <!-- Energía Eólica -->
    <section class="energy-item reverse">
      <div class="energy-icon">
        <img src="../assets/images/molino.png" alt="Energía Eólica" />
      </div>
      <div class="energy-content">
        <h3>2. Energía Eólica</h3>
        <p>
          La energía eólica se obtiene del viento mediante aerogeneradores. Es una fuente limpia y renovable que ayuda a reducir las emisiones de gases contaminantes.
        </p>
      </div>
    </section>
    <div class="separator"></div>

    <!-- Energía Hidráulica -->
    <section class="energy-item">
      <div class="energy-icon">
        <img src="../assets/images/energia-del-agua.png" alt="Energía Hidráulica" />
      </div>
      <div class="energy-content">
        <h3>3. Energía Hidráulica</h3>
        <p>
          La energía hidráulica se genera aprovechando el movimiento del agua, como en los embalses, ríos y mareas. Se considera una fuente renovable, ya que el ciclo del agua es natural y continuo.
        </p>
      </div>
    </section>
    <div class="separator"></div>

    <!-- Energía Geotérmica -->
    <section class="energy-item reverse">
      <div class="energy-icon">
        <img src="../assets/images/energia-geotermica.png" alt="Energía Geotérmica" />
      </div>
      <div class="energy-content">
        <h3>4. Energía Geotérmica</h3>
        <p>
          La energía geotérmica se extrae del calor almacenado en el interior de la Tierra. Puede ser utilizada para producir electricidad o para calefacción.
        </p>
      </div>
    </section>
    <div class="separator"></div>

    <!-- Energía Biomasa -->
    <section class="energy-item">
      <div class="energy-icon">
        <img src="../assets/images/energia-de-biomasa.png" alt="Energía Biomasa" />
      </div>
      <div class="energy-content">
        <h3>5. Energía Biomasa</h3>
        <p>
          La biomasa es la materia orgánica proveniente de residuos agrícolas, forestales o industriales. A través de la combustión o procesos de biotransformación, se puede generar electricidad o calor.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Este componente es solo informativo, no necesitamos lógica
</script>

<style scoped>
.energy-types-container {
  margin: 20px;
  padding: 20px;
  background-color: var(--color-background);
  border-radius: 8px;
  animation: fadeInDown 0.8s ease-in-out; /* Añadimos la animación */
}

/* Animación de caída */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.energy-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap; /* Permite que los elementos se ajusten cuando la pantalla sea más grande */
}

.energy-content {
  width: 40%;
}

.energy-icon {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.energy-icon img {
  width: 80px;
  height: auto;
  margin: 50px;
  max-width: 100%;
}

h2 {
  font-size: 2rem;
  color: var(--color-secondary);
  text-align: center;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.6rem;
  color: var(--color-secondary);
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 50rem;
  color: var(--color-text);
}

/* Línea decorativa entre secciones */
.separator {
  height: 2px;
  background-color: var(--color-accent);
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Media Queries para pantallas más grandes */
@media (min-width: 768px) {
  .energy-item {
    flex-direction: row;
    justify-content: flex-start;
  }

  .energy-content {
    width: 55%;
  }

  .energy-icon {
    width: 35%;
  }

  .energy-icon img {
    width: 100px; /* Aumentamos el tamaño de la imagen para pantallas más grandes */
  }
}
</style>
