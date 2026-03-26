//Invocacion de la funcion..
const ejemplo = (x,y,f) => {
    return f(x,y)
}
ejemplo (5,3, (x,y) => (x+y)) //8
const miFuncion = (x,y) => x * y
ejemplo(5,3, miFuncion)

//funciones pueden pasarse como parametros o a otras funciones
ejemplo = (5,3, miFuncion(5,3)) //15 5*3 = 15}
//le paso el resultado de la funcion miFuncion a ejemplo, no la funcion en si, por eso el resultado es 15 y no la funcion
ejemplo(5,3,(x,y) => x>y) //true 5 es mayor que 6 
//ejemplo(5,3(x)=> x*x)//No funciona! tiene que recibir 2 parametros!
//---------------------------------------------------
//revisión clase pasada
//funciones de orden superior: son funciones que reciben otras funciones como parametros o devuelven funciones como resultado
const array = [8,9,6,3,4]
//filter devuelve true o false dependiendo de si el elemento cumple la condicion, y devuelve un nuevo array con los elementos que cumplen la condicion
const arrayFiltrado = array.filter((x) => x%2 == 0)// [8,9,6] devuelve un nuevo array con los elementos que cumplen la condicion
const y = [8,6,4]
const b = array.find((x) => x%2 == 0) //8 devuelve el primer elemento que cumple la condicion (uno de los elementos(el primero que encuentre))
//si  hay un numero impar da underfine
//-----------------------------------------------------
//.every devuelve true o false dependiendo de si todos los elementos cumplen la condicion, sino devuelve false
r = array.every((x) => x % 2 == 0) //false devuelve true si todos los elementos cumplen la condicion, sino devuelve false
z = array.every((x) => x >= 1) //true devuelve si todos los elementos cumplen la condicion, sino devuelve false
//todos cumplen con la condicion? 
//.some devuelve true o false dependiendo de si al menos un elemento cumple la condicion, sino devuelve false
r = array.some((x) => x % 2 == 0) //true devuelve true si al menos un elemento cumple la condicion, sino devuelve false
//------------------------------------------------------
// vimos metodos filter, every, some, find, map, reduce
//.map devuelve un nuevo array con los resultados de la funcion aplicada a cada elemento del array original
const c = array.map((x) => x * 2) //[16,18,12,6,8] devuelve un nuevo array con los resultados de la funcion aplicada a cada elemento del array original
//------------------------------------------------------
//.find devuelve el primer elemento que cumple la condicion, sino devuelve undefined
const f = array.find((x) => x % 2 == 0) //8 devuelve el primer elemento que cumple la condicion (uno de los elementos(el primero que encuentre))
//si  hay un numero impar da underfine
//ejemplo un array de numeros
const numeros = [1,2,3,4,5,6,7,8,9,10]
const r = numeros.every((x) => x >= 5) //true devuelve true si todos los elementos cumplen la condicion, sino devuelve false
//otra forma suando el .some
//hay alguno que sea < (menor) a 5?

const s =! numeros.some((x) => x < 5)//
const t = numeros.every((x) => x !== 7)
//hay alguno que sea igual a 7?
const g =! numeros.some((x) => x === 7) //true devuelve true si al menos un elemento cumple la condicion, sino devuelve false
//------------------------------------------------------
//.map parto de un conjunto y termino en un segundo conjunto de otros valores!
//.map es un metodo de transformacion (a cada elemento lo transformo en algo diferente) (puede ser un numero, un string, un booleano, etc)
const a =  array [2,8,5]
//misma cantidad de elementos pero (transformados) con la funcion que le paso a map
const q = a.map((x) => x + 1) //[3,9,6] devuelve un nuevo array con los resultados de la funcion aplicada a cada elemento del array original
const r2 = a.map((x) => x % 2 == 0) //[true,false,true] devuelve un nuevo array con los resultados de la funcion aplicada a cada elemento del array original
//-------------------------------------------------------
