@echo off
title Encryptador - Lanzador de Aplicacion

:: Cambia al directorio del script
cd /d "%~dp0"

echo.
echo =================================================
echo      Lanzador de la Aplicacion Encryptador
echo =================================================
echo.

:: Verificar si node_modules existe
if exist "node_modules" (
    echo [1/2] Dependencias ya instaladas. Saltando instalacion.
) else (
    echo [1/2] Dependencias no encontradas. Instalando...
    echo Por favor, espera. Esto puede tardar unos minutos la primera vez.
    echo.

    npm install

    :: Verifica si la instalacion fue exitosa
    if %errorlevel% neq 0 (
        echo.
        echo -------------------------------------------------
        echo  ERROR: No se pudieron instalar las dependencias.
        echo  Asegurate de tener Node.js y npm instalados.
        echo  Puedes descargarlos desde: https://nodejs.org/
        echo -------------------------------------------------
        echo.
        pause
        exit /b %errorlevel%
    )

    echo.
    echo [✓] Dependencias instaladas correctamente.
    echo.
)

echo [2/2] Iniciando el servidor de desarrollo...
echo.
echo Busca la URL del servidor (ej: http://localhost:5173) a continuacion:
echo.

:: Iniciamos el servidor en la MISMA ventana para mantenerla abierta
npm run dev

:: En caso de que el servidor termine (por error o Ctrl+C), mostramos mensaje
echo.
echo El servidor ha sido detenido.
echo.
pause