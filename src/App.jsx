import { useEffect, useState } from 'react';
import { BASE_URL } from './utils/contants';

function App() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    fetch(`${BASE_URL}/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error('Error al conectar con la API:', error);
        setMessage('Error al conectar con la API');
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mensaje desde la API:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;