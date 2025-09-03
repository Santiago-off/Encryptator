@echo off
title Encryptador - Lanzador de Aplicacion

echo.
echo =================================================
echo      Lanzador de la Aplicacion Encryptador
echo =================================================
echo.

echo [1/2] Verificando e instalando dependencias con npm...
echo Por favor, espera. Esto puede tardar unos minutos la primera vez.
echo.

:: Instala todas las dependencias listadas en package.json
npm install

:: Verifica si el comando anterior tuvo exito
if %errorlevel% neq 0 (
    echo.
    echo -------------------------------------------------
    echo  ERROR: No se pudieron instalar las dependencias.
    echo  Asegurate de tener Node.js y npm instalados.
    echo  (Puedes descargarlo desde https://nodejs.org/)
    echo -------------------------------------------------
    echo.
    pause
    exit /b %errorlevel%
)

echo.
echo Dependencias instaladas correctamente.
echo.
echo [2/2] Iniciando el servidor de desarrollo...
echo.

:: Inicia el servidor de desarrollo de Vite
npm run dev

echo.
pause