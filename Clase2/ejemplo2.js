//volvemos con objetos clave-valor (String, arrays, funcion)
const validaciones = {
    //es un objeto y asigno una funcion de tipo booleano(el valor que recibe sea mayor a 100)
    stock: (p) => p.stock >= value, //el valor que recibe sea mayor o igual a 100

    nombre: (p) => p.name.length <= value,//el valor que recibe tenga una longitud mayor o igual a 5 caracteres

    precio: (p) => p.precio <= value, //el valor que recibe sea menor o igual a 100
}
//un array de objetos con las mismas claves pero con diferentes valores
const producto = [
    {name: "Producto1", stock: 50, precio: 150}, 
    {name: "Producto2", stock: 200, precio: 80},
    {name: "Producto3", stock: 150, precio: 120},
]
//ejemplo de como usar el objeto validaciones para validar un producto
//son polimorficos! pueden recibir diferentes tipos de datos y funcionar igual! (en este caso, el producto es un objeto con las mismas claves pero con diferentes valores)
//devuelve true o false dependiendo de si el producto cumple con la validacion o no!
//cuando el no,bre del producto sea mayor o igual a 5 caracteres, el stock sea mayor o igual a 100 y el precio sea menor o igual a 100, entonces devuelve true, sino devuelve false

const filtros = [
    {fn: "stock", valor: 50}, // String
    {fn: "nombre", valor: 1500}, 
]
//.map devuelve un nuevo (array)(p.valor) =>  con los resultados de la funcion aplicada a cada elemento del array original
const fn = filtros.map( 
    (each) => validaciones [each.fn]) //opción Nro1 validaciones.stock(producto[0])
producto.filter((p) => fn.every((f) => f(p.fn.value))) //devuelve un nuevo array con los productos que cumplen con todas las validaciones 
// (fn.every devuelve true o false dependiendo de si todos los elementos cumplen la condicion, sino devuelve false)
//retormanme uno que cumpla
producto.filter((p) => fn.some((f) => f(p.fn.value))) //devuelve un nuevo array con los productos que cumplen con al menos una de las validaciones
// (fn.some devuelve true o false dependiendo de si al menos un elemento cumple la condicion, sino devuelve false)
//devuelve un nuevo array con los productos que cumplen con al menos una de las validaciones
//Opcion Nro1
validaciones.stock(producto[0])
//opción Nro2
//validaciones["Stock"](8)
//----------------------------------------------------------------------
// veremos includes (sirve para saber si un elemento esta incluido en un array o no,
// devuelve true o false dependiendo de si el elemento esta incluido o no)
//REPASARRR______________________________________________________________________
const o1 = {x: 0, y: 0}
const p = {x: 0, y: 0}

const array = [ o1 , {x: 1, y:1}, {x: 2, y: 2}]
array.includes( {x: 0, y: 0} ) // true
//practicar en casaa....
const array2 = [{x: 0}, {x:1}]
console.log(array2.includes({x: 0})) // true
//no funciona porque el objeto que se esta buscando no es el mismo que el que esta en el array, aunque tengan las mismas propiedades y valores, son objetos diferentes en memoria, por eso devuelve false
//para que funcione, tendria que ser el mismo objeto en memoria, por ejemplo:
const o2 = {x: 0}
const array3 = [o2, {x:1}]
console.log(array3.includes(o2)) // true
//----------------------------------------------------------------------
//caso Nro2
const o3 = {x: o}
const a = [o,{x:1}]

console.log(a.includes(o)) // true