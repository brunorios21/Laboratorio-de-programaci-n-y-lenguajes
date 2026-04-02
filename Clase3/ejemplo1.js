//funciones de orden superior
//Significa que pueden recibir otras funciones como argumentos o devolver funciones como resultado!
console.log("-------------------------------------------------------------------------");
console.log("Funciones de orden superior");
function saludar(nombre) {
    return "Hola " + nombre;
}
function despedir(nombre) {
    //esta función devuelve otra función que saluda a la persona con un mensaje de despedida!
    return () => "Adiós " + nombre;
}
console.log(saludar("María"));
console.log(despedir("María"));
//las funciones puedan asignarse a una constante o variable y luego ser invocadas a través de esa variable o constante!
const f = (nombre) => {
    return "Hola " + nombre;
}
console.log(f("Carlos"));
console.log("-------------------------------------------------------------------------");
console.log("Funciones de bloque vs funciones de expresión");
// -----------------------------------------------------------------
// {} significa que es una funcion de bloque, es decir, que tiene varias instrucciones dentro de ella. 
// En cambio, si no se usan {}, se asume que la función tiene una sola instrucción y 
// el valor de esa instrucción se devuelve automáticamente.
//cuantos expresiones conocemos?
//Una expresion es una combinacion de operadores y operandos que produce un valor.
//Ejemplo de expresion:
const x = 5 + 3; //5 + 3 es una expresion que produce el valor 8
const y = x * 2; //x * 2 es una expresion que produce el valor 16
console.log(x); //8
console.log(y); //16
//Una expresion tiene un valor, mientras que la declaración no tiene un valor. Por ejemplo, 
// una declaración de variable no produce un valor, mientras que una expresión de asignación sí lo hace.
console.log("-------------------------------------------------------------------------");
console.log("Expresiones aritméticas, booleanas y de comparación");
//-----------------------------------------------------------------
//1er expresion aritmetica que produce un valor numérico como resultado de una operación matemática entre 
// dos o más operandos.
const a = 10;
const b = 5;
const suma = a + b; //suma es una expresion que produce el valor 15
const resta = a - b; //resta es una expresion que produce el valor 5
const multiplicacion = a * b; //multiplicacion es una expresion que produce el valor 50
const division = a / b;
console.log(suma); //15
console.log(resta); //5
console.log(multiplicacion); //50
console.log(division); //2
console.log("-------------------------------------------------------------------------");
//2da expresion booleana o de comparación, que produce un valor booleano (true o false) 
// dependiendo de la comparación entre dos valores.
const c = 10;
const d = 5;
const esMayor = c > d; //esMayor es una expresion que produce el valor true
const esMenor = c < d; //esMenor es una expresion que produce el valor false
console.log(esMayor); //true
console.log(esMenor); //false
console.log("-------------------------------------------------------------------------");
//3er tipo de expresión: && (AND lógico), que produce un valor booleano dependiendo de la evaluación de dos expresiones booleanas.
// ! (NOT lógico), que produce el valor booleano opuesto al de la expresión booleana que se le pasa como argumento.

const e = true;
const g = false;
const resultadoAnd = e && g;
const resultadoNot = !e;
console.log(resultadoNot); //false
console.log(resultadoAnd); //false
console.log("-------------------------------------------------------------------------");