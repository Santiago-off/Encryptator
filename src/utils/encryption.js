// El alfabeto que usaremos para el cifrado. Incluimos el espacio.
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz ';

// Función para generar un "flujo de clave" que coincida con la longitud del texto.
// Ej: texto="hola mundo", clave="key" -> flujo="keykeykeyk"
const generateKeyStream = (text, key) => {
  let keyStream = '';
  let keyIndex = 0;
  for (let i = 0; i < text.length; i++) {
    // Solo extendemos la clave para los caracteres que están en nuestro alfabeto
    if (ALPHABET.includes(text[i])) {
      keyStream += key[keyIndex % key.length];
      keyIndex++;
    } else {
      // Para caracteres no válidos, simplemente añadimos un espacio que no afectará
      keyStream += ' ';
    }
  }
  return keyStream;
};

/**
 * Cifra el texto usando el Cifrado de Vigenère.
 * @param {string} text - El texto a encriptar (solo minúsculas y espacios).
 * @param {string} key - La clave para el cifrado (solo minúsculas, sin espacios).
 * @returns {string|null} - El texto cifrado o null si la validación falla.
 */
export const encryptText = (text, key) => {
  if (!key || !/^[a-z]+$/.test(key)) {
    alert("La clave es obligatoria y debe contener solo letras minúsculas sin espacios ni acentos.");
    return null;
  }
  if (/[^a-z\s]/.test(text)) {
    alert("El texto a encriptar debe contener solo letras minúsculas y espacios.");
    return null;
  }

  let encryptedText = '';
  const keyStream = generateKeyStream(text, key);

  for (let i = 0; i < text.length; i++) {
    const textChar = text[i];
    const textIndex = ALPHABET.indexOf(textChar);

    if (textIndex === -1) {
      // Si el caracter no está en el alfabeto, lo dejamos como está.
      encryptedText += textChar;
      continue;
    }

    const keyChar = keyStream[i];
    const keyIndex = ALPHABET.indexOf(keyChar);
    
    const newIndex = (textIndex + keyIndex) % ALPHABET.length;
    encryptedText += ALPHABET[newIndex];
  }
  return encryptedText;
};

/**
 * Descifra el texto usando el Cifrado de Vigenère.
 * @param {string} text - El texto a desencriptar.
 * @param {string} key - La clave usada para el cifrado.
 * @returns {string|null} - El texto descifrado o null si la validación falla.
 */
export const decryptText = (text, key) => {
  if (!key || !/^[a-z]+$/.test(key)) {
    alert("La clave es obligatoria y debe contener solo letras minúsculas sin espacios ni acentos.");
    return null;
  }

  let decryptedText = '';
  const keyStream = generateKeyStream(text, key);

  for (let i = 0; i < text.length; i++) {
    const textChar = text[i];
    const textIndex = ALPHABET.indexOf(textChar);

    if (textIndex === -1) {
      decryptedText += textChar;
      continue;
    }

    const keyChar = keyStream[i];
    const keyIndex = ALPHABET.indexOf(keyChar);

    // La operación inversa a la suma es la resta
    let newIndex = (textIndex - keyIndex);
    if (newIndex < 0) {
      newIndex += ALPHABET.length; // Aseguramos que el índice sea positivo
    }
    
    decryptedText += ALPHABET[newIndex];
  }
  return decryptedText;
};