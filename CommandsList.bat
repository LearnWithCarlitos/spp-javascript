@echo off
:menu
cls
echo =========================
echo       Menú Principal
echo =========================
echo 1. Instalar dependencias (npm install)
echo 2. Ejecutar prettier check (npm run prettier:check)
echo 3. Ejecutar prettier fix (npm run prettier:fix)
echo 4. Ejecutar eslint check (npm run lint:check)
echo 5. Ejecutar eslint fix (npm run lint:fix)
echo 6. Verificar formato y linting (npm run check)
echo 7. Arreglar formato y linting (npm run fix)
echo 8. Salir
echo =========================
set /p opcion="Selecciona una opción: "

if "%opcion%"=="1" goto instalar_dependencias
if "%opcion%"=="2" goto ejecutar_prettier_check
if "%opcion%"=="3" goto ejecutar_prettier_fix
if "%opcion%"=="4" goto ejecutar_eslint_check
if "%opcion%"=="5" goto ejecutar_eslint_fix
if "%opcion%"=="6" goto verificar_todo
if "%opcion%"=="7" goto arreglar_todo
if "%opcion%"=="8" goto salir

echo Opción no válida. Por favor, elige una opción del 1 al 8.
pause
goto menu

:instalar_dependencias
echo Instalando dependencias...
npm install
pause
goto menu

:ejecutar_prettier_check
echo Ejecutando prettier check...
npm run prettier:check
pause
goto menu

:ejecutar_prettier_fix
echo Ejecutando prettier fix...
npm run prettier:fix
pause
goto menu

:ejecutar_eslint_check
echo Ejecutando eslint check...
npm run lint:check
pause
goto menu

:ejecutar_eslint_fix
echo Ejecutando eslint fix...
npm run lint:fix
pause
goto menu

:verificar_todo
echo Verificando formato y linting...
npm run check
pause
goto menu

:arreglar_todo
echo Arreglando formato y linting...
npm run fix
pause
goto menu

:salir
echo Saliendo...
exit
