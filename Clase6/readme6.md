# Clase 6: Desarrollo de Servidores con Express y Manejo de Callbacks

Este proyecto contiene la implementación de un servidor básico utilizando el framework Express para Node.js, junto con ejercicios prácticos sobre funciones de orden superior y callbacks.

## Prerrequisitos

Para ejecutar este proyecto, es necesario tener instalado Node.js en el sistema.

## Instalación y Configuración

Siga estos pasos para preparar el entorno:

1. Iniciar el proyecto de Node.js:
   npm init -y

2. Instalar el framework Express:
   npm install express

## Estructura del Código

El archivo principal contiene cuatro secciones fundamentales:

### 1. Inicialización e Importaciones
Se importan los módulos necesarios y se definen las constantes base:
* Express: Framework para el manejo de rutas y servidor.
* Materias: Archivo JSON local que funciona como base de datos.
* Puerto: Configurado en el puerto 5001.

### 2. Endpoints de la API
Se definen las rutas para interactuar con la información de las materias:
* GET /materias: Devuelve el listado completo de materias con un estado 200.
* GET /materias/:id: Busca una materia específica. Si no existe, devuelve un error 404 con el mensaje "Materia no encontrada".

### 3. Funciones de Lógica y Callbacks
Se incluyen ejemplos de funciones que utilizan callbacks para el manejo de flujos:
* faa: Función que realiza un ciclo hasta el valor ingresado y luego ejecuta una función callback.
* fa: Función que incluye una validación inicial. Si el valor es menor o igual a 0, se dispara el callback con dicho valor.
* faa2: Estructura de ejecución para validar mensajes de error en consola basados en condiciones lógicas.

### 4. Levantamiento del Servidor
Se utiliza el método app.listen para poner el servidor en marcha. Incluye una validación de errores para confirmar si el proceso se inició correctamente o si hubo un fallo en el puerto.

## Instrucciones de Uso

1. Asegúrese de tener el archivo materias.json en la ruta ./data/.
2. Ejecute el servidor con el comando: node nombre_del_archivo.js
3. Acceda a http://localhost:5001/materias para visualizar los datos.