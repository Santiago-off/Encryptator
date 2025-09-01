import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleEncrypt = () => {
    // Lógica de encriptación irá aquí
    console.log("Botón de encriptar presionado");
  };

  const handleDecrypt = () => {
    // Lógica de desencriptación irá aquí
    console.log("Botón de desencriptar presionado");
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Encriptador de Texto</h1>
      </header>
      <main className="app-main">
        <div className="text-area-container">
          <textarea
            className="text-area"
            placeholder="Ingresa el texto aquí..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="button-container">
            <button className="action-button" onClick={handleEncrypt}>
              Encriptar
            </button>
            <button className="action-button" onClick={handleDecrypt}>
              Desencriptar
            </button>
          </div>
        </div>
        <div className="text-area-container">
          <textarea
            className="text-area"
            placeholder="Texto resultante..."
            value={outputText}
            readOnly
          />
        </div>
      </main>
      <footer className="app-footer">
        <p>Creado con ❤️ para el desafío</p>
      </footer>
    </div>
  );
}

export default App;