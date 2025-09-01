import React from 'react';

function InputSection({ inputText, setInputText, onEncrypt, onDecrypt }) {
  return (
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
        <button className="action-button encrypt-button" onClick={onEncrypt}>
          Encriptar
        </button>
        <button className="action-button decrypt-button" onClick={onDecrypt}>
          Desencriptar
        </button>
      </div>
    </div>
  );
}

export default InputSection;