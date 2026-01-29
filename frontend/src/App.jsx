import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.text();
        setMessage(data);
      } catch (err) {
        setMessage('Error fetching message');
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="App">
      <h1>Backend Message:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
