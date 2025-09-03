🔐 Encryptador
<p align="center"> <img src="https://img.shields.io/badge/React-18+-blue.svg" alt="React"/> <img src="https://img.shields.io/badge/Vite-4+-purple.svg" alt="Vite"/> <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"/> <img src="https://img.shields.io/badge/Status-Active-brightgreen.svg" alt="Status"/> </p>

📖 Descripción

Encryptador es una aplicación web en React + Vite que permite encriptar y desencriptar información de manera local.
Requiere obligatoriamente una clave de cifrado definida por el usuario, con la recomendación de que sea mayor a 10 caracteres.


✨ Características


🔒 Encriptación y desencriptación local.


🔑 Clave de cifrado obligatoria y configurable.


⚡ Ejecución rápida con Vite.


🎨 Interfaz moderna con React.


📂 Estructura del proyecto

📦Encryptador

 ┣ 📜start_app.bat          # Script de inicio
 
 ┣ 📜requirements.txt       # Dependencias
 
 ┣ 📂src
 
 ┃ ┣ 📜main.jsx             # Entry point
 
 ┃ ┣ 📜App.jsx              # Componente raíz
 
 ┃ ┣ 📂components
 
 ┃ ┃ ┣ 📜Header.jsx
 
 ┃ ┃ ┣ 📜InputSection.jsx
 
 ┃ ┃ ┣ 📜OutputSection.jsx
 
 ┃ ┃ ┗ 📜Footer.jsx
 
 ┃ ┣ 📂utils
 
 ┃ ┃ ┗ 📜encryption.js      # Lógica de cifrado
 
 ┣ 📂public
 
 ┗ 📂node_modules


⚙️ Tecnologías
Tecnología	Uso
React 18+	Frontend
Vite 4+	Bundler / Dev server
Node.js 18+	Entorno de ejecución
JavaScript	Lógica de cifrado


▶️ Instalación y uso

git clone https://github.com/Santiago-off/Encryptator.git

cd Encryptador

npm install   # o yarn install

start_app.bat


Abrir en navegador:

http://localhost:5173


⚠️ Al ingresar deberás establecer una clave de cifrado.

⚠️ Nota

Este proyecto tiene fines educativos y experimentales.
La seguridad de la información dependerá directamente de la robustez de la clave definida por el usuario.
