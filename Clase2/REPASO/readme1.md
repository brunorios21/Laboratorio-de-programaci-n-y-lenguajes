# Clase 2 - Introducción a Node.js y Gestión de Paquetes

## ¿Qué es Node.js?

Node.js es un entorno de ejecución que permite utilizar JavaScript fuera del navegador. Su principal característica es la capacidad de ejecutar código del lado del servidor, posibilitando el desarrollo de aplicaciones backend, herramientas de línea de comandos y scripts automatizados.

Internamente, Node.js utiliza el motor V8, el mismo que emplea Google Chrome, lo que le permite interpretar y ejecutar código JavaScript de forma eficiente.

---

## Instalación de Node.js

Para comenzar a trabajar con Node.js es necesario instalarlo en el sistema:

1. Acceder al sitio oficial: [Node.js](https://nodejs.org)  
2. Descargar la versión **LTS (Long Term Support)**, recomendada para entornos productivos por su estabilidad  
3. Verificar la instalación mediante la consola:

   ```bash
   node -v
   ```
   Al instalar Node.js también se instala npm, el gestor de paquetes por defecto.

## ¿Para qué sirve npm?

npm (Node Package Manager) es una herramienta fundamental dentro del ecosistema Node.js. Permite gestionar dependencias y automatizar tareas dentro de un proyecto.

### Principales funcionalidades:

- Instalación de librerías externas
- Gestión de dependencias
- Definición de scripts de ejecución
- Publicación de paquetes

Repositorio oficial de paquetes: [npm](https://www.npmjs.com)

## ¿Qué es una dependencia?

Una dependencia es cualquier módulo o librería externa que un proyecto necesita para funcionar correctamente.

### Ejemplo conceptual:

```javascript
const express = require('express');
```

En este caso, el proyecto depende de la librería Express.

## Archivo package.json

El archivo `package.json` es el núcleo de cualquier proyecto Node.js. Define metadatos, dependencias y scripts de ejecución.

### Ejemplo básico:

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "echo \"Sin tests definidos\""
  },
  "dependencies": {},
  "devDependencies": {}
}
```

## Inicialización de un proyecto

Para crear un proyecto desde cero:

1. Posicionarse en el directorio deseado
2. Ejecutar:
   ```bash
   npm init
   ```

Para generar el archivo automáticamente con valores por defecto:

```bash
npm init -y
```

Esto crea un archivo `package.json` estructurado en formato JSON, basado en pares clave-valor.

## Ejecución de scripts

Los scripts definidos en `package.json` permiten automatizar tareas comunes dentro del proyecto.

### Ejemplos:

```bash
npm start
npm run dev
npm test
```

### Consideraciones:

- Los scripts `start`, `test`, `stop` y `restart` pueden ejecutarse sin el prefijo `run`
- Para cualquier otro script personalizado es obligatorio utilizar `npm run`

### Ejemplo práctico:

```json
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}
```

## Ejecución:

```bash
npm start
npm run dev
```

## Conclusión

Node.js permite extender el uso de JavaScript al desarrollo backend, ofreciendo un entorno eficiente y escalable. En conjunto con npm, proporciona un ecosistema robusto para la gestión de dependencias y automatización de tareas, consolidándose como una herramienta fundamental en el desarrollo moderno de software.