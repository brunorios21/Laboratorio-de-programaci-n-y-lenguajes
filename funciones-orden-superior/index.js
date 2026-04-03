//Dado un array de productos, filtrar aquellos que tengan stock mayor a 10 y precio menor a 100000
const productos = require('./productos');
//validaciones es un objeto que tiene como claves el nombre de la validacion y como valor una funcion que recibe un producto
//  y un valor a comparar, y devuelve true o false dependiendo si el producto cumple con la validacion o no
const validaciones = {
    stock : (p, valor)=> p.stock > valor,
    precio : (p, valor) => p.precio <= valor,
    nombre: (p, valor) => p.nombre.length < valor,
    categoria: (p, valor) => valor.includes(p.categorias)
}
//filtros es un array de objetos que tiene como claves fn y values, donde fn es el nombre de la validaciòn a aplicar
// y values es el valor a comparar en la validaciòn 
const filtros = [
  {
    fn: "stock",
    values: 11
  },
  {
    fn: "precio",
    values: 100000
  },
]
//makeFilter es una funcion que recibe un producto y devuelve una funcion que recibe un filtro y devuelve el resultado
// de la validacion aplicada al producto con el valor del filtro
const makeFilter = (p) => ({fn,values}) => validaciones[fn](p, values)
// r es el resultado de filtrar el array de productos con la funcion makeFilter aplicada a cada producto y cada filtro
const r = productos.filter( prod => filtros.every( filtro => makeFilter(prod)(filtro)))

console.log(r)