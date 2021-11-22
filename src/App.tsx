import { useState, useEffect } from 'react';
import './App.css';

function App(): JSX.Element {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((result) => setMessage(result.message));
  }, []);

  return (
    <div>
      <p>Hello</p>
      <p>{message}</p>
    </div>
  );
}

export default App;
