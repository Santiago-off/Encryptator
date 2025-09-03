import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import { encryptText, decryptText } from './utils/encryption';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [encryptionKey, setEncryptionKey] = useState(''); // Estado para la clave

  const handleEncrypt = () => {
    if (!inputText.trim()) {
      alert("El campo de texto está vacío.");
      return;
    }
    // Pasamos el texto y la clave a la función de encriptar
    const encrypted = encryptText(inputText, encryptionKey);
    if (encrypted !== null) {
      setOutputText(encrypted);
    }
  };

  const handleDecrypt = () => {
    if (!inputText.trim()) {
      alert("El campo de texto está vacío.");
      return;
    }
    // Pasamos el texto y la clave a la función de desencriptar
    const decrypted = decryptText(inputText, encryptionKey);
    if (decrypted !== null) {
      setOutputText(decrypted);
    }
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText)
      .then(() => {
        alert("¡Texto copiado al portapapeles!");
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
        alert("Error al copiar el texto.");
      });
  };

  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <InputSection 
          inputText={inputText}
          setInputText={setInputText}
          encryptionKey={encryptionKey}
          setEncryptionKey={setEncryptionKey}
          onEncrypt={handleEncrypt}
          onDecrypt={handleDecrypt}
        />
        <OutputSection 
          outputText={outputText}
          onCopy={handleCopy}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;