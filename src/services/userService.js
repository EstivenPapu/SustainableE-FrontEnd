const BASE_URL = 'http://localhost:8080/usuarios'; // Ajusta la URL de tu backend

export async function loginUser(username, password) {
    const response = await fetch(`${BASE_URL}/login?username=${username}&password=${password}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }

    return await response.json();
}

export async function registerUser(fullname, email, username, password) {
    
    const userData = {
        nombre: fullname,
        email: email,
        username: username,
        password: password,
      };
    // Realizar la solicitud POST al backend
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      // Verificar si la respuesta es exitosa
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error;
    }
} 
