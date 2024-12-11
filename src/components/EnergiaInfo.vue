<template>
  <div class="energia-info-container">
    <h1>¿Por qué es importante la transición energética?</h1>

    <div class="info-item">
      <div class="info-content">
        <h3>1. Salvar el planeta</h3>
        <p>
          El uso masivo de combustibles fósiles ha causado un aumento de gases de efecto invernadero (como el dióxido de carbono, CO2), que atrapan el calor en la atmósfera y contribuyen al calentamiento global.
        </p>
      </div>
      <div class="info-icon">
        <img src="../assets/images/planeta-tierra.png" alt="Salvar el planeta" />
      </div>
    </div>

    <div class="separator"></div>

    <div class="info-item reverse">
      <div class="info-icon">
        <img src="../assets/images/energia.png" alt="Diversificar energía" />
      </div>
      <div class="info-content">
        <h3>2. Diversificar y asegurar el suministro energético</h3>
        <p>
          El mundo no puede seguir dependiendo de unos pocos recursos (como el petróleo) que se encuentran en manos de unos pocos países.
        </p>
      </div>
    </div>
   
    <div class="separator"></div>

    <div class="info-item">
      <div class="info-content">
        <h3>3. Crear empleos y fomentar la innovación</h3>
        <p>
          La transición energética no solo beneficia al medio ambiente, ¡también puede ser un motor de desarrollo económico!
        </p>
      </div>
      <div class="info-icon">
        <img src="../assets/images/trabajo.png" alt="Empleos e innovación" />
      </div>
    </div>

    <div class="separator"></div>

    <div class="info-item reverse">
      <div class="info-icon">
        <img src="../assets/images/salud.png" alt="Mejorar salud" />
      </div>
      <div class="info-content">
        <h3>4. Mejorar la salud pública</h3>
        <p>
          Las emisiones de los combustibles fósiles no solo calientan el planeta, sino que también contaminan el aire y generan problemas de salud.
        </p>
      </div>
    </div>

    <div class="separator"></div>

    <div class="info-item">
      <div class="info-content">
        <h3>5. Ahorro económico a largo plazo</h3>
        <p>
          Aunque las energías renovables pueden parecer costosas al principio, se ha demostrado que son más económicas a largo plazo.
        </p>
      </div>
      <div class="info-icon">
        <img src="../assets/images/monedas.png" alt="Ahorro económico" />
      </div>
    </div>

    <div class="separator"></div>

    <div class="info-item reverse">
      <div class="info-icon">
        <img src="../assets/images/justicia-social.png" alt="Justicia social" />
      </div>
      <div class="info-content">
        <h3>6. La justicia social y económica</h3>
        <p>
          La transición energética también está relacionada con la justicia social. A medida que avanzamos hacia un sistema más sostenible, la energía será más accesible para todos.
        </p>
      </div>
    </div>

    <p>
      En resumen: la transición energética no es solo un cambio técnico, es un paso hacia un futuro más justo, limpio y económico.
    </p>
    <p>
      La transición energética no es solo una moda, ¡es una necesidad para el bienestar de todos!
    </p>
  </div>
</template>
  
<script setup>

</script>
  
<style scoped>
  .energia-info-container {
    padding: 20px;
    background-color: var(--color-background);
    color: var(--color-text);
    max-width: 100rem;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--color-secondary);
    margin-bottom: 20px;
  }
  
  .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    animation: fadeIn 0.8s ease-in-out;
  }
  
  .info-item.reverse {
    flex-direction: row-reverse;
  }
  
  .info-content {
    width: 60%;
  }
  
  .info-icon {
    width: 150px;
    margin-right: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-accent);
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
  }
  
  .info-icon img {
    width: 50px;
    height: auto;
    
  }
  
  .info-content h3 {
    font-size: 1.4rem;
    color: var(--color-secondary);
    margin-bottom: 10px;
  }
  
  .info-content p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-text);
  }

  .separator {
    height: 2px;
    background-color: var(--color-accent);
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  /* Animación para la entrada */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
  