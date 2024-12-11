const BASE_URL = 'http://localhost:8080/usuarios';

//Funcion para iniciar sesion 
export async function loginUser(username, password) {
    const response = await fetch(`${BASE_URL}/login?username=${username}&password=${password}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }

    return await response.json();
}

//Funcion para registrarse
export async function registerUser(fullname, email, username, password) {
    
    const userData = {
        nombre: fullname,
        email: email,
        username: username,
        password: password,
      };

    try {
      const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

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

//Obtener usuario por ID
export async function getUserById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error('No se pudo obtener la información del usuario');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getUserById:', error);
    throw error;
  }
}

//Actualizar usuario
export async function updateUser(id, updates) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error('No se pudo actualizar el usuario');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en updateUser:', error);
    throw error;
  }
}

//Eliminar Usuario
export async function deleteUser(id) {
  try {
      const response = await fetch(`${BASE_URL}/${id}`, {
          method: 'DELETE',
      });

      if (!response.ok) {
          throw new Error('No se pudo eliminar el usuario');
      }

      console.log(`Usuario con ID ${id} eliminado con éxito.`);
  } catch (error) {
      console.error('Error en deleteUser:', error);
      throw error;
  }
}