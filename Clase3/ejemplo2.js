//Pasamos por parametros a la función (recibemos una función como argumento) y luego la invocamos dentro de la función que la recibe.
//llamo una funcio exect (es una función de orden superior) que recibe una función y un valor, y luego invoca esa función con el valor que le pasamos como argumento.
console.log("-------------------------------------------------------------------------");
console.log("Funciones de orden superior");
const exect = (fn, valor) => fn (valor);
exect((x) => x + 1 , 3)// 4
exect((x) => x == 0 ? "cero" : "no es cero", 0) // "cero"
exect((x) => x == 0 ? "cero" : "no es cero", 5) // "no es cero"
//Hasta acá vimos la semana pasada, funciones de orden superior, funciones de bloque vs funciones de expresión, expresiones aritméticas, booleanas y de comparación.
//que una funcion retorne una funcion, es decir, que una función pueda devolver otra función como resultado de su ejecución.
//Ejemplo de función que devuelve otra función:
const closure = (value) => (x) => x + value;
// closure(3) devuelve una función que recibe un argumento x y devuelve x + 3
closure (3) (2) // closure(3)(2) devuelve una función que recibe un argumento x y devuelve el resultado de sumar 3 a ese argumento, por lo tanto, closure(3)(2) devuelve 5
const f3 = closure (3);
const f5 = closure (5);
console.log(f3(2)); // 5
console.log(f5(2)); // 7
console.log("-------------------------------------------------------------------------");
// tienen que pasar 3 cosas para que una función sea considerada un closure:
//1. La función debe ser una función anidada, es decir, una función que se define dentro de otra función.
//2. La función anidada debe acceder a una variable definida en la función externa.
//3. La función anidada debe ser devuelta o pasada como argumento a otra función, 
// lo que permite que la función anidada siga 
// accediendo a la variable de la función externa incluso después de que la función externa 
// haya terminado su ejecución.
//pregunta de parcial (EXPLIQUE PORQUE TRATA A LOS CIUDADANOS DE PRIMER ORDEN)
//-------------------------------------------------------------------------------------------------------------
//ESCRIBA BREVEMENTE PORQUE EL LENGUAJE DE JAVASCRIPT TRATA A LOS CIUDADANOS DE PRIMER ORDEN, ES DECIR,
//A LAS FUNCIONES COMO CIUDADANOS DE PRIMER ORDEN.
//JavaScript trata a las funciones como ciudadanos de primer orden porque pueden ser:
// 1. Asignadas a variables o constantes
// 2. Pasadas como argumentos a otras funciones
// 3. Devueltas como resultado de otras funciones
// Esto significa que las funciones son objetos de primera clase que se pueden manipular 
// y utilizar de la misma manera que cualquier otro tipo de dato (números, strings, objetos, etc.).
// Esta característica es fundamental para la programación funcional y permite 
// una gran flexibilidad en el diseño y organización de los programas.
//-------------------------------------------------------------------------------------------------------------
console.log("-------------------------------------------------------------------------");
//-----------------------------------------------------------------
//Una función de orden superior es una función que puede recibir otras funciones como argumentos o devolver funciones como resultado. 
//Un closure es una función que tiene acceso a las variables de su función externa, incluso después de que la función externa haya terminado su ejecución.
const fb = (x,y) =>  x >= y
//Asigna una función a una variable o constante, lo que permite que esa función pueda ser invocada a través de esa variable o constante.
const excet = (f,v) => (x) => fb (x,v)
console.log(excet(fb,5)(3)); // false
console.log(excet(fb,5)(7)); // true
console.log("-------------------------------------------------------------------------");
//Ejemplo de funcion de orden superior que devuelve otra función:
//EJERCICIO DE PARCIAL: escriba una función de orden superior que reciba una función y un valor,
// y dvuelva una nueva función que reciba un argumento y devuelva el resultado de aplicar la función recibida al argumento y al valor recibido.
const a = [1,2,3,4,5];
const b = [3,6];
//funciones es una función de orden superior que devuelve otra función que recibe un argumento 
// y devuelve el resultado de multiplicar ese argumento por x y dividirlo por 2
const funciones = (x) => (y) => x * y 
//funciones2 es una función que recibe un array (a) 
// y devuelve un nuevo array que contiene el resultado de aplicar la función funciones a cada elemento del array a con el valor de x igual a 2
const funciones2 = a.map(each => funciones(each)) 
//funciones2 es un array de funciones que recibe un argumento y devuelve el resultado de multiplicar ese argumento por cada elemento del array a y dividirlo por 2
const r = funciones2.map(each =>  b.map(value => each (value))) // reultado: [[1*3, 1*6], [2*3, 2*6], [3*3, 3*6], [4*3, 4*6], [5*3, 5*6]]
console.log(r); // [[3, 6], [6, 12], [9, 18], [12, 24], [15, 30]]
console.log("-------------------------------------------------------------------------");
