# Documentación Técnica: Estructuras de Datos y Programación Funcional en JavaScript materia (Laboratorio de programaciòn y lenguajes)

Este repositorio contiene un análisis profundo sobre la manipulación de objetos literales, la gestión de colecciones y la transición hacia paradigmas funcionales en el desarrollo moderno con JavaScript (ES6+).

---

## 1. Fundamentos Teóricos: El Objeto Literal

En JavaScript, casi todo es un objeto. Un **objeto literal** es una lista de pares clave-valor encerrados en llaves `{}`. Según la especificación ECMAScript, los objetos son colecciones dinámicas de propiedades.

### Conceptos Clave Aplicados:
* **Composición de Objetos:** La propiedad `residencia` demuestra el concepto de composición, donde un objeto se construye a partir de otros objetos más simples.
* **Métodos y Contexto:** El método `esMayor` encapsula lógica de negocio dentro del dato, una base fundamental de la Programación Orientada a Objetos (POO).
* **Mutabilidad de Referencias:** Aunque el objeto se declara con `const`, la **referencia** a la memoria es constante, pero sus **propiedades** son mutables.

---

## 2. Cuadro Comparativo: Métodos de Iteración y Filtrado

A continuación, se comparan las tres estrategias de procesamiento de datos utilizadas en el código:

| Característica | Bucle Tradicional (`for`) | Método `.filter()` | Método `.find()` |
| :--- | :--- | :--- | :--- |
| **Paradigma** | Imperativo (Dice *cómo* hacerlo) | Declarativo (Dice *qué* buscar) | Declarativo |
| **Resultado** | Requiere gestión manual de un array externo | Retorna un **nuevo Array** con coincidencias | Retorna el **primer objeto** encontrado |
| **Rendimiento** | Altamente eficiente pero propenso a errores | Optimizado para legibilidad y mantenimiento | Alta eficiencia (detiene la ejecución al hallar el dato) |
| **Uso Ideal** | Algoritmos complejos o recursión manual | Filtrar listados (ej: alumnos aprobados) | Buscar un registro único (ej: por ID o Nombre) |

---

## 3. Evolución de la Sintaxis: Arrow Functions

El código muestra la progresión de las funciones hacia una sintaxis más limpia. Las **Arrow Functions** (Funciones Flecha) introducidas en ES6 no solo reducen el código, sino que tienen un comportamiento distinto respecto al manejo del scope y el valor de `this`.

1. **Sintaxis Extendida:** Con llaves `{}` y `return` explícito. Necesaria para lógica multilínea.
2. **Sintaxis Concise (Inline):** Elimina las llaves y el `return` cuando la función es una expresión única. Aumenta la claridad en funciones de orden superior.

---

## 4. Análisis de la Recursividad (`filtro5`)

La función `filtro5` es un ejemplo de **recursión**, una técnica donde una función se llama a sí misma. 
* **Importancia:** Es vital para recorrer estructuras arbóreas (como el DOM de una página web o carpetas de archivos).
* **Advertencia:** En el código actual, la recursión sobre un array plano es menos eficiente que el uso de `.filter()` y puede causar un *Stack Overflow* si la lista es excesivamente larga sin un caso base de corte optimizado.

---

## 5. Referencias y Bibliografía Recomendada

Para profundizar en estos conceptos, se recomienda la lectura de las siguientes fuentes fundamentales:

### Libros Esenciales:
* **"Eloquent JavaScript" por Marijn Haverbeke:** Capítulo 4 (Data Structures: Objects and Arrays). Esencial para entender cómo se mapean los datos en memoria.
* **"You Don't Know JS Yet" por Kyle Simpson:** Tomo sobre *Objects & Classes*. Analiza la naturaleza profunda de los prototipos y objetos.
* **"JavaScript: The Good Parts" por Douglas Crockford:** Un clásico sobre la herencia prototipal y la creación de objetos.

### Documentación y Recursos Web:
* **MDN Web Docs (Mozilla):** [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) - La referencia definitiva para desarrolladores.
* **JavaScript.info:** [Objetos: lo básico](https://es.javascript.info/object) - Guía visual y teórica sobre la estructura de datos.
* **TC39 Archive:** Especificaciones oficiales del estándar ECMAScript sobre métodos de Array.

---

## Enseñanza Final del Proyecto

La principal enseñanza de este código es la **Abstracción**. El paso de un bucle `for` manual a métodos como `.filter()` representa un salto de madurez en el desarrollo: dejamos de preocuparnos por los punteros e índices de un array para enfocarnos en la lógica de los datos. La legibilidad del código es, en última instancia, tan importante como su funcionalidad.
