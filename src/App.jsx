import { useState } from 'react';
import './App.css';
import Muñeco from './assets/Muñeco.svg'; // Asegúrate de tener esta imagen en src/assets/

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const encryptionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

  const handleEncrypt = () => {
    if (!inputText.trim()) {
      alert("El campo de texto está vacío.");
      return;
    }
    if (/[^a-z\s]/.test(inputText)) {
      alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
      return;
    }

    const encryptedText = inputText
      .split('')
      .map(char => encryptionMap[char] || char)
      .join('');
    
    setOutputText(encryptedText);
  };

  const handleDecrypt = () => {
    if (!inputText.trim()) {
      alert("El campo de texto está vacío.");
      return;
    }
    
    let decryptedText = inputText;
    
    for (const key in encryptionMap) {
      const value = encryptionMap[key];
      decryptedText = decryptedText.replaceAll(value, key);
    }

    setOutputText(decryptedText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText)
      .then(() => {
        alert("¡Texto copiado al portapapeles!");
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
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
          <div className="info-text">
            <p>⚠️ Solo letras minúsculas y sin acentos.</p>
          </div>
          <div className="button-container">
            <button className="action-button encrypt-button" onClick={handleEncrypt}>
              Encriptar
            </button>
            <button className="action-button decrypt-button" onClick={handleDecrypt}>
              Desencriptar
            </button>
          </div>
        </div>
        <div className="output-container">
          {outputText ? (
            <div className="result-container">
              <textarea
                className="text-area"
                value={outputText}
                readOnly
              />
              <button className="action-button copy-button" onClick={handleCopy}>
                Copiar
              </button>
            </div>
          ) : (
            <div className="placeholder-container">
              <img src={Muñeco} alt="Ilustración de persona con lupa" className="placeholder-image" />
              <h2>Ningún mensaje fue encontrado</h2>
              <p>Ingresa el texto que desees encriptar o desencriptar.</p>
            </div>
          )}
        </div>
      </main>
      <footer className="app-footer">
        <p>Creado con ❤️ por White</p>
      </footer>
    </div>
  );
}

export default App;