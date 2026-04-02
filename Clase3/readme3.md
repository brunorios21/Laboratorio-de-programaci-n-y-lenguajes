# Clase 3 - Programación Funcional y Closures en JavaScript

## Objetivos de la clase
- Entender funciones de orden superior (HOF).
- Usar funciones como datos: pasar funciones a otras funciones y retornarlas.
- Comprender y practicar closures y ámbito léxico.
- Validar objetos con mapas de funciones de validación.

## Archivos del proyecto
- `ejemplo1.js`: Ejemplos básicos de función, llamada e impresión en consola.
- `ejemplo2.js`: Funciones de orden superior, `exect`, función que devuelve función y closure.
- `ejemplo3.js`: Validaciones con diccionario de funciones, uso de `map`.
- `readme3.md`: resumen y ejercicios (este archivo).

##  Resumen de conceptos clave
### 1. Funciones de orden superior (HOF)
- función que recibe otra función como argumento y/o devuelve una función.
- ejemplo: `const exect = (fn, valor) => fn(valor);`

### 2. Funciones como ciudadanos de primer orden
- pueden asignarse a variables.
- pueden pasarse como argumentos.
- pueden devolverse como resultado.
- pueden almacenarse en objetos/arrays.

### 3. Closures
- se crea cuando una función interna conserva acceso al contexto léxico de la función externa, incluso después de terminar la ejecución de la función externa.
- ejemplo:
  - `const closure = value => x => x + value;`
  - `const f3 = closure(3);` → `f3(2)` = 5

### 4. Validaciones dinámicas
- puede usarse un objeto de funciones de validación (mapa de criterios) y un array de filtros.
- `validaciones[each.dn]` retorna la función de validación correspondiente y se puede aplicar al producto.

##  Ejercicios prácticos (trepar de menor a mayor)

### Ejercicio 1: `exect` y funciones como parámetro
1. Crea en `ejemplo1.js` la función `exect` (si no existe) :
   - `const exect = (fn, valor) => fn(valor);`
2. Llama con varias funciones:
   - suma 1
   - doble
   - compara con 10
3. Console.log el resultado de cada llamada.

### Ejercicio 2: retornar función (closure simple)
1. En `ejemplo2.js`, implementa:
   - `const makeMultiplier = factor => number => number * factor;`
2. Crea `const by2 = makeMultiplier(2);`, `const by5 = makeMultiplier(5);`
3. Comprueba `by2(4) === 8`, `by5(4) === 20`.

### Ejercicio 3: closure con estado interno
1. Implementa contador usando closure:
   - `const createCounter = () => { let count = 0; return () => ++count; }`
2. Prueba:
   - `const c = createCounter(); c(); c();` (debería 1, 2)

### Ejercicio 4: diccionario de validación
en `ejemplo3.js`:
1. Arregla objeto y sintaxis:
   - `const validaciones = { Stock: ..., Precio: ... }`
2. Escribe función `aplicarFiltros(producto, filtros)` que
   - reciba `producto` y `filtros`.
   - use `filtros.every(f => validaciones[f.dn](producto, f.value))`.
3. Crea 2 productos y prueba la función con distintos arrays `filtros`.

### Ejercicio 5 (opcional): HOF para transformaciones
1. Crea `const map = (arr, fn) => arr.map(fn);` (simulando `Array.prototype.map`).
2. Crea `const filter = (arr, fn) => arr.filter(fn);`.
3. Usa `map` y `filter` con funciones de callback del tipo `x => x * 2` etc.

## Buenas prácticas
- Usa nombres descriptivos: `validaciones`, `filtros`, `producto`.
- Evita mutar datos dentro de callbacks.
- Mantén funciones puras cuando puedas.
- Comenta el propósito de cada función.

---

Si querés, puedo crear una plantilla de código con TODOs y comentarios para cada ejercicio (copy/paste directo).