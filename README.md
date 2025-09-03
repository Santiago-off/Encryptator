🔐 Encryptador

Encryptador es una aplicación desarrollada en React + Vite que permite encriptar y desencriptar información de manera local.
Se ejecuta como un servidor local y requiere el uso de una clave de cifrado personalizada, garantizando seguridad y control en el manejo de datos.

✨ Funcionalidades principales

Interfaz moderna y responsiva desarrollada en React.

Sistema de cifrado y descifrado de datos directamente en el navegador.

Clave de cifrado obligatoria al iniciar sesión en la aplicación (editable por el usuario).

Recomendación de clave segura: mínimo 10 caracteres.

Ejecución local sobre http://localhost:5173.

📂 Estructura del proyecto
📦Encryptador
 ┣ 📜start_app.bat          # Script de inicio del servidor local
 ┣ 📜requirements.txt       # Dependencias del proyecto
 ┣ 📂src                    # Código fuente principal
 ┃ ┣ 📜main.jsx             # Entry point de la aplicación
 ┃ ┣ 📜App.jsx              # Componente raíz
 ┃ ┣ 📂components           # Componentes de la UI
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜InputSection.jsx
 ┃ ┃ ┣ 📜OutputSection.jsx
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂utils                # Utilidades de cifrado
 ┃ ┃ ┗ 📜encryption.js
 ┣ 📂public                 # Archivos estáticos
 ┗ 📂node_modules           # Dependencias instaladas

⚙️ Requisitos

Node.js 18+

npm o yarn

▶️ Ejecución

Clonar el repositorio:

git clone https://github.com/tuusuario/Encryptador.git
cd Encryptador


Instalar dependencias:

npm install


o

yarn install


Iniciar la aplicación con el script:

start_app.bat


Abrir en el navegador:

http://localhost:5173


⚠️ Nota: Al ingresar, deberás establecer una clave de cifrado.

📌 Nota Importante

Este proyecto está orientado a fines educativos y de investigación.
El nivel de seguridad dependerá directamente de la fortaleza de la clave de cifrado proporcionada por el usuario.
