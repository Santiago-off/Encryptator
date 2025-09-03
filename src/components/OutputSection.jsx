import React from 'react';
import './OutputSection.css'; // Importa los nuevos estilos
import Muñeco from '../assets/Muñeco.svg'; // Asegúrate de que la ruta a tu imagen sea correcta

const OutputSection = ({ outputText, onCopy }) => {
  const hasOutput = outputText && outputText.trim() !== '';

  return (
    <section className="output-section">
      <div className="output-content">
        {hasOutput ? (
          <p>{outputText}</p>
        ) : (
          <div className="output-placeholder">
            <img src={Muñeco} alt="Ilustración de búsqueda" />
            <h3>Ningún mensaje fue encontrado</h3>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
          </div>
        )}
      </div>
      {hasOutput && (
        <button className="copy-btn" onClick={onCopy}>
          Copiar
        </button>
      )}
    </section>
  );
};

export default OutputSection;