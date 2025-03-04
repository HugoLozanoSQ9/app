async function registerUser(userData) {
  const firebaseUrl = 'https://fnbvjphtpidmzqmconsx.supabase.co/rest/v1/archivos'; // Reemplaza con la URL de tu base de datos

  try {
    const response = await fetch(firebaseUrl, {
      method: 'POST',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuYnZqcGh0cGlkbXpxbWNvbnN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0ODczNDMsImV4cCI6MjA1NTA2MzM0M30.o13i0pQhZ9wnmG2VJ3fj836MJZ_qW2HboK7ytIGFRn4',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuYnZqcGh0cGlkbXpxbWNvbnN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0ODczNDMsImV4cCI6MjA1NTA2MzM0M30.o13i0pQhZ9wnmG2VJ3fj836MJZ_qW2HboK7ytIGFRn4'
      },
      body: userData // No uses JSON.stringify, envía el FormData directamente
    });

    if (!response.ok) {
      throw new Error('Error al registrar el usuario');
    }

    const data = await response.json();
    console.log('Usuario registrado:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export { registerUser };

// Ejemplo de uso
// const newUser = {
//   name: 'John Doe',
//   email: 'john.doe@example.com'
// };

// registerUser(newUser);

