# Clase 5: Desarrollo de APIs con Node.js y Express

Este repositorio contiene la implementación de un servidor web básico utilizando el framework Express para la gestión de un catálogo de productos tecnológicos.

## 1. Tecnologías Utilizadas

* **Node.js**: Entorno de ejecución para JavaScript en el servidor.
* **Express**: Framework minimalista para la gestión de rutas y solicitudes HTTP.
* **Nodemon**: Herramienta de desarrollo que reinicia automáticamente el servidor ante cambios en el código.
* **JSON**: Formato de intercambio de datos utilizado para la persistencia local de productos.

## 2. Estructura del Proyecto

* `index.js`: Punto de entrada de la aplicación. Configura el servidor y las rutas.
* `data/productos.json`: Archivo que actúa como base de datos local.
* `package.json`: Archivo de configuración del proyecto y dependencias.

## 3. Herramientas de Pruebas (Testing)

Para verificar el funcionamiento de los endpoints, se han integrado las siguientes herramientas:

### Hoppscotch
Es una plataforma de desarrollo de API de código abierto (Open Source). Se utiliza para realizar peticiones HTTP (GET, POST, PUT, DELETE) y visualizar las respuestas del servidor en formato JSON. Es una alternativa ligera a Postman que permite organizar colecciones de rutas y probar parámetros de consulta (Query Params).

### Thunder Client
Es una extensión ligera para Visual Studio Code. Permite realizar pruebas de API directamente desde el editor de código, evitando la necesidad de cambiar de aplicación. Sus principales ventajas son la rapidez y la integración con el flujo de trabajo de desarrollo.

## 4. Endpoints y Lógica de Rutas

### GET /productos
Retorna la lista completa de productos disponibles en el archivo JSON. 
Estado: 200 OK.

### GET /productos/:idProducto
Busca un producto específico mediante su identificador único.
* **Lógica de validación**: Se utiliza `parseInt()` o `Number()` para convertir el parámetro de ruta (string) a número y así permitir una comparación estricta (===) con los datos del JSON.
* **Manejo de errores**: Si el ID no es numérico, retorna un código 400. Si el producto no existe, retorna un código 404.

### GET /productos/categorias/find
Filtra productos según una categoría específica enviada por Query Params.
* **Uso**: `/productos/categorias/find?categoria=tecnologia`
* **Implementación**: Utiliza el método `.filter()` sobre el array de productos.

### GET /categorias
Retorna una lista de todas las categorías presentes en el catálogo, eliminando duplicados.
* **Implementación**: Se utiliza el método `.map()` para extraer las categorías y un objeto `Set` o el método `.reduce()` para filtrar los valores únicos.

## 5. Instrucciones de Ejecución

1. Instalación de dependencias:
   npm install

2. Ejecución en modo desarrollo:
   npm run dev

3. Acceso al servidor:
   El servidor estará disponible en http://localhost:3000