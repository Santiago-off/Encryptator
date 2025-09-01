const encryptionMap = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

export const encryptText = (text) => {
  if (/[^a-z\s]/.test(text)) {
    alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
    return null;
  }
  return text
    .split('')
    .map(char => encryptionMap[char] || char)
    .join('');
};

export const decryptText = (text) => {
  let decryptedText = text;
  for (const key in encryptionMap) {
    const value = encryptionMap[key];
    decryptedText = decryptedText.replaceAll(value, key);
  }
  return decryptedText;
};