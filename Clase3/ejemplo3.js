// Ejemplo 3: Validación de productos con múltiples criterios
// Supongamos que tenemos un array de productos, cada uno con propiedades como stock, precio, categoría, marca y nombre. 
// Queremos crear una función de orden superior que nos permita validar estos productos según diferentes criterios.
const validaciones = {
    "Stock": (p,value) => p.strock >= value,
    "Precio": (p,value) => p.Precio <= value,
    "Categoria": (p,value) => p.categoria.includes(value),
    "nombre": (p, value) => p.nombre.length >= value
}
filtros = [
    {dn: "Stock", value: 10},
    {dn: "Precio", value: 100},
    {dn: "Categoria", value: "Electrónica"},
    {dn: "nombre", value: 5}
]
//Creamos un array de funciones de validación a partir del array de filtros, 
// utilizando el objeto de validaciones para obtener la función correspondiente a cada filtro.
const fv = filtros.map(each => validaciones[each.dn]) // array de funciones de validación
console.log(fv); // [ [Function: Stock], [Function: Precio], [Function: Categoria], [Function: nombre] ]
// Creamos una función de orden superior que recibe un producto y devuelve una función que recibe un filtro y devuelve el resultado de aplicar la función de validación correspondiente al filtro al producto.
const makeFuntion =(each) => (p) => validaciones[each.dn](p, each.value)
const fvs = filtros.map(each => makeFunction(each)) // array de funciones de validación para cada filtro
console.log(fvs); // [ [Function (anonymous)], [Function (anonymous)], [Function (anonymous)], [Function (anonymous)] ]
// Ahora podemos aplicar estas funciones de validación a cada producto para verificar si cumplen con los criterios establecidos en los filtros.
const ps = productos.filter(p => fvs.every(f => f(p)))// productos es un array de productos, cada producto es un objeto con propiedades como strock, price, categoria y nombre
console.log(ps); // array de productos que cumplen con todos los criterios de validación