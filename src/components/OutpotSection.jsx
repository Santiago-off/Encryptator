import React from 'react';
import Muñeco from '../assets/Muñeco.svg';

function OutputSection({ outputText, onCopy }) {
  return (
    <div className="output-container">
      {outputText ? (
        <div className="result-container">
          <textarea
            className="text-area"
            value={outputText}
            readOnly
          />
          <button className="action-button copy-button" onClick={onCopy}>
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
  );
}

export default OutputSection;