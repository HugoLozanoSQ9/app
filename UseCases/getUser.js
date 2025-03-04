
async function getUser(userId) {
  const firebaseUrl = `https://pruebitajeje-415ca-default-rtdb.firebaseio.com/users/${userId}.json`; // Reemplaza con la URL de tu base de datos

  try {
    const response = await fetch(firebaseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error al obtener el usuario');
    }

    const data = await response.json();
    //console.log('Usuario obtenido:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export {  getUser }

// Ejemplo de uso
// getUsers().then(users => console.log(users));
// getUser('userId123').then(user => console.log(user));