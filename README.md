🔐 Encryptador








Encryptador es una aplicación en React + Vite que permite encriptar y desencriptar información de manera local.
Funciona en un servidor local y requiere una clave de cifrado obligatoria que el usuario puede definir y cambiar.

✨ Funcionalidades

Interfaz en React moderna y responsiva.

Encriptación y desencriptación local.

Clave de cifrado obligatoria (se recomienda mínimo 10 caracteres).

Ejecución en http://localhost:5173.

📂 Estructura
📦Encryptador
 ┣ 📜start_app.bat          # Script de inicio
 ┣ 📜requirements.txt       # Dependencias
 ┣ 📂src
 ┃ ┣ 📜main.jsx             # Entry point
 ┃ ┣ 📜App.jsx              # Componente raíz
 ┃ ┣ 📂components           # UI Components
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜InputSection.jsx
 ┃ ┃ ┣ 📜OutputSection.jsx
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜encryption.js      # Lógica de cifrado
 ┣ 📂public
 ┗ 📂node_modules

⚙️ Requisitos

Node.js 18+

npm o yarn

▶️ Uso
git clone https://github.com/tuusuario/Encryptador.git
cd Encryptador
npm install   # o yarn install
start_app.bat


Abrir en navegador:

http://localhost:5173


⚠️ Al ingresar, deberás establecer una clave de cifrado.

📌 Nota

Este proyecto es de carácter educativo y experimental.
La seguridad depende directamente de la fortaleza de la clave de cifrado.
