
# REPASO CLASE 2: Métodos de Arrays en JavaScript

Este documento resume los métodos más utilizados para manipular arrays en JavaScript, incluyendo su funcionamiento y ejemplos prácticos.

---

## 1. filter()

 **Sintaxis y Características**
- **No mutador**: No modifica el array original
- **Parámetros**: función callback con (elemento, índice, array)
- **Retorna**: nuevo array filtrado

Crea un **nuevo array** con todos los elementos que cumplan la condición implementada por la función dada.

```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]
```

## 2. find()
Devuelve el **primer elemento** que cumple la condición. Si ningún valor cumple la condición, devuelve `undefined`.

```javascript
const numeros = [10, 20, 30];
const encontrado = numeros.find(n => n > 15);
console.log(encontrado); // 20
```

## 3. findIndex()
Devuelve el **índice** del primer elemento que cumpla con la condición. Si no encuentra coincidencias, devuelve `-1`.

```javascript
const numeros = [5, 12, 8];
const indice = numeros.findIndex(n => n > 10);
console.log(indice); // 1
```

## 4. map()
Crea un **nuevo array** con los resultados de la llamada a la función aplicada a cada uno de sus elementos.

```javascript
const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6]
```

## 5. every()
Determina si **todos** los elementos en el array satisfacen la condición. Devuelve un booleano.

```javascript
const numeros = [2, 4, 6];
const todosPares = numeros.every(n => n % 2 === 0);
console.log(todosPares); // true
```

## 6. some()
Verifica si **al menos un** elemento del array cumple con la condición. Devuelve un booleano.

```javascript
const numeros = [1, 3, 5];
const hayPar = numeros.some(n => n % 2 === 0);
console.log(hayPar); // false
```

## 7. includes()
Determina si un array **contiene** un determinado elemento, devolviendo `true` o `false` según corresponda.

```javascript
const frutas = ['manzana', 'pera', 'naranja'];
console.log(frutas.includes('pera')); // true
```

## 8. push()
Añade uno o más elementos al **final** de un array y devuelve la nueva longitud del array.

```javascript
const numeros = [1, 2];
numeros.push(3);
console.log(numeros); // [1, 2, 3]
```

## 9. splice()
Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Es común usarlo junto a `findIndex` para eliminar un item específico.

```javascript
const numeros = [10, 20, 30, 40];
const indice = numeros.findIndex(n => n === 30);

if (indice !== -1) {
  numeros.splice(indice, 1); // (posición, cantidad a eliminar)
}
console.log(numeros); // [10, 20, 40]
```

## 10. reduce()
Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un **único valor**.

```javascript
const numeros = [1, 2, 3, 4];
// acumulador inicia en 0
const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(suma); // 10

```
