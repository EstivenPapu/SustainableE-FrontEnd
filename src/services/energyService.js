const API_BASE_URL = 'http://localhost:8080/produccion';

// Funcion para obtener datos de todos los paises
export async function getAllCountries() {
  try {
    const response = await fetch(`${API_BASE_URL}`,{method: 'GET',});
    if (!response.ok) {
      throw new Error('No se pudo obtener la lista de países');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error en getAllCountries:', error);
    throw error;
  }
}

// Funcion para buscar un pais por nombre
export async function getCountryByName(name) {
  try {
    const response = await fetch(`${API_BASE_URL}/nombre?nombre=${name}`);
    if (!response.ok) {
      throw new Error('No se pudo encontrar el país');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getCountryByName:', error);
    throw error;
  }
}

// Funcion para obtener estadisticas por tipo de fuente y año
export async function getStatsBySourceAndYear(year) {
  try {
    const response = await fetch(`${API_BASE_URL}/por-fuente-y-region?year=${year}`);
    if (!response.ok) {
      throw new Error('No se pudieron obtener las estadísticas por fuente y año');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getStatsBySourceAndYear:', error);
    throw error;
  }
}

// Función para calcular el porcentaje de energía renovable
export async function getRenewablePercentage(year, totalConsumption) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/porcentaje-renovable?year=${year}&consumoTotal=${totalConsumption}`
    );
    if (!response.ok) {
      throw new Error('No se pudo calcular el porcentaje de energía renovable');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getRenewablePercentage:', error);
    throw error;
  }
}

// Función para obtener la tendencia de capacidad instalada solar
export async function getSolarCapacityTrend() {
  try {
    const response = await fetch(`${API_BASE_URL}/tendencia-solar`);
    if (!response.ok) {
      throw new Error('No se pudo obtener la tendencia de capacidad solar');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getSolarCapacityTrend:', error);
    throw error;
  }
}

// Función para obtener el top 10 de países con mayor producción de energía eólica
export async function getTop10WindProduction(year) {
  try {
    const response = await fetch(`${API_BASE_URL}/top-paises-eolica?year=${year}`);
    if (!response.ok) {
      throw new Error('No se pudo obtener el top 10 de países por energía eólica');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getTop10WindProduction:', error);
    throw error;
  }
}

// Función para listar todas las fuentes de energía y su participación
export async function getEnergySourcesParticipation() {
  try {
    const response = await fetch(`${API_BASE_URL}/fuentes-participacion`);
    if (!response.ok) {
      throw new Error('No se pudo obtener la participación de las fuentes de energía');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getEnergySourcesParticipation:', error);
    throw error;
  }
}
