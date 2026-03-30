//--------- filter () ------------------- //
console.log("metodo filter() [Devuelve un nuevo array con los elementos que cumplen una condicion]");
// Devuelve un nuevo array con los elementos que cumplen una condicion
const numeros = [1,2,3,4,5];
const pares = numeros.filter(n => n % 2 === 0); // [2,4]
console.log(pares);
console.log("------------------------------");

//--------- find () ------------------- //
console.log("metodo find() [Devuelve el primer elemento que cumple una condicion, o underdined si no encuentra ninguno]");
//Devuelve el primer elemento que cumple una condicion, o underdined si no encuentra ninguno
const numeros2 = [10, 20, 30];
//busca el primer numero mayor a 15
const encontrado = numeros2.find(n => n > 15);
console.log(encontrado); // 20
console.log("------------------------------");

//--------- findIndex () -------------------//
console.log("metodo findIndex() [Devuelve el índice del primer elemento que cumple una condicion, o -1 si no encuentra ninguno]");
//Devuelve el índice del primer elemento que cumple una condicion, o -1 si no encuentra ninguno
const numeros3 = [5, 10, 15];
const indice = numeros3.findIndex(n => n === 10);
console.log(indice); // 1
console.log("------------------------------");

//--------- map () -------------------//
console.log("metodo map() [Devuelve un nuevo array con los resultados de aplicando una funcion de transformación a cada elemento del array original]");
//Crea un nuevo array aplicando una función de transformación a cada elemento 
const numeros4 = [1, 2, 3];
const dobles = numeros4.map(n => n * 2); // [2, 4, 6]
console.log(dobles);
console.log("------------------------------");
//--------- every () ------------------- //
console.log("metodo every() [Verifica si todos los ELEMENTOS cumplen una condicion, devuelve true o false]");
//Verifica si todos los ELEMENTOS cumplen una condicion, devuelve true o false
const numeros5 = [2, 4, 6];
const todosPares = numeros5.every(n => n % 2 === 0);
console.log(todosPares); // true
console.log("------------------------------");

//--------- some () ------------------- //
console.log("metodo some() [Verifica si al menos un elemento cumple una condicion, devuelve true o false]");
//Verifica si al menos un elemento cumple una condicion, devuelve true o false
const numeros6 = [1, 3, 5];
const hayPares = numeros6.some(n => n % 2 === 0);
console.log(hayPares); // false
console.log("------------------------------");

//--------- includes () ------------------- //
console.log("metodo includes() [Comprueba si el array contiene un elemento especifico, devuelve true o false]");
//Comprueba si el array contiene un elemento especifico, devuelve true o false
const frutas = ['manzana', 'banana', 'naranja'];
const tieneBanana = frutas.includes('banana');
console.log(tieneBanana); // true
console.log("------------------------------");

//--------- push () ------------------- //
console.log("metodo push() [Agrega uno o más elementos al final del array y devuelve la nueva longitud del array]");
//Agrega elementos al final del array y devuelve la nueva longitud.
const numeros7 = [1, 2, 3];
numeros7.push(3);
console.log(numeros7); // [1, 2, 3, 3]
console.log("------------------------------");

//--------- splice () ------------------- //
console.log("metodo splice() [Permite agregar o eliminar elementos de un array]");
//permite agregar o eliminar elementos de un array.
//combinado con findIndex se puede eliminar un elemento por condición 
const numeros8 = [10, 20, 30, 40];
//Busca el índice del elemento que quieres eliminar (Por ejemplo, el número 20)
const indiceEliminar = numeros8.findIndex(n => n === 20);
// Si el elemento existe, != -1, lo eliminamos usando splice
if (indiceEliminar !== -1) {
    numeros8.splice(indiceEliminar, 1); // Elimina el elemento en el índice encontrado
}
console.log(numeros8); // [10, 30, 40]
console.log("------------------------------");

//--------- reduce () ------------------- //
console.log("metodo reduce() [Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor]");
//Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor
const numeros9 = [1, 2, 3, 4];
const suma = numeros9.reduce((acc, n) => acc + n, 0); // 10
console.log(suma);
console.log("------------------------------");