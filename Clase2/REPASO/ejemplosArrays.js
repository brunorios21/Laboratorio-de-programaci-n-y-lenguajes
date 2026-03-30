// Ejemplos de funciones de orden superior y métodos de arrays en JavaScript

// Funciones que reciben otras funciones o devuelven funciones
// Ejemplo: Una función que devuelve otra función (closure)
const f = (x) => {
  return (y) => y + x;
};

// Crear una función que suma 4 a cualquier número
const sumar4 = f(4); // devuelve una función

console.log(sumar4(6)); // 10

// Arrays: filter, map, reduce
// Ejemplo base: Array de objetos
const arr = [
  { nombre: "a", valor: 3 },
  { nombre: "b", valor: 8 },
  { nombre: "c", valor: 12 }
];

// 1) Quedarse con los objetos cuyo valor ≥ 10 usando filter
const mayores = arr.filter(e => e.valor >= 10); // [ { nombre: "c", valor: 12 } ]
console.log("Objetos con valor >= 10:", mayores);

// 2) Obtener solo los nombres de esos objetos usando filter y map
const nombresMayores = arr
  .filter(e => e.valor >= 10)
  .map(e => e.nombre); // [ "c" ]
console.log("Nombres de objetos con valor >= 10:", nombresMayores);

// 3) reduce: dejar un solo resultado (ej.: el objeto con mayor valor)
const maximo = arr.reduce((a, b) => (a.valor > b.valor ? a : b)); // { nombre: "c", valor: 12 }
// Si no pasás valor inicial a reduce, a arranca siendo el primer elemento y b el segundo.
console.log("Objeto con mayor valor:", maximo);

// Última modificación: viernes, 27 de marzo de 2026, 10:49