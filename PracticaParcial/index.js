//Creamos el import de xpress
const express = require('express');
const app = express();
const port = 3000;
//importamos los datos
const { productos, estudiantes, ordenes, ventas } = require('./datos');

//Creamos el middleware para entender el json

app.use(express.json());

//------------Ejercicios------------

//===========================================================
console.log("===================Ejercicio 1:=========================")
//Ejercicio 1:
const nums1 = [2, 5, 8, 11]

const checks = [
  n => n > 10,
  n => n % 2 === 0,
  n => n < 3
]

const res1 = nums1
  .map(n => checks.map(fn => fn(n)))
  .filter(arr => arr.some(v => v))

console.log(res)
//===========================================================
console.log("===================Ejercicio 2:=========================")
const values = [3, 6, 9, 10]

const fns = [
  n => n % 3 === 0,
  n => n > 2,
  n => n < 10
]

const res2 = values
  .map(v => fns.map(fn => fn(v)))
  .filter(arr => arr.every(v => v))

console.log(res2)
//===========================================================
console.log("===================Ejercicio 3:=========================")
const nums3 = [7, 10, 15, 20]

const fns3 = {
  a: n => n + 1,
  b: n => n % 5,
  c: n => n > 10
}

const keys = ['a', 'b', 'c']

const res3 = nums3
  .map(n => keys.map(k => fns3[k](n)))
  .find(arr => arr[1] === 0 && arr[2])

console.log(res3)
//===========================================================
console.log("===================Ejercicio 4:=========================")
const nums4 = [1, 4, 7, 10]

const fns4 = [
  n => n * 2,
  n => n % 3,
  n => n - 1
]

const res4 = nums4
  .map(n => fns4.map(fn => fn(n)))
  .filter(arr => arr.includes(0))

console.log(res4
)
//===========================================================
console.log("===================Ejercicio 5:=========================")
const nums = [3, 5, 12]

const fns5 = [
  n => n % 2 === 0,
  n => n > 10,
  n => n === 5
]

const res5 = nums5
  .map(n => fns5.map(fn => fn(n)))
  .filter(arr => arr.some((v, i) => v && i === 2))

console.log(res5)
//===========================================================
console.log("===================Ejercicio 6:=========================")
const nums6 = [4, 9, 16]

const fns6 = [
  n => n / 2,
  n => n % 4,
  n => n > 10
]

const res6 = nums6
  .map(n => fns6.map(fn => fn(n)))
  .findIndex(arr => arr[1] === 0 && arr[2])

console.log(res6)

//===========================================================
console.log("===================Ejercicio 7:=========================")
const nums7 = [2, 3, 4]

const fns7 = [
  n => [n, n * 2],
  n => [n % 2 === 0]
]

const res7 = nums7
  .map(n => fns7.map(fn => fn(n)))
  .flat(2)
  .filter(v => typeof v === 'number' && v > 3)
console.log(res7)
//===========================================================
console.log("===================Ejercicio 8:=========================")
const nums8 = [5, 10, 15]

const fns8 = [
  n => n % 5 === 0,
  n => n > 7
]

const res8 = nums8
  .map(n => fns8.map(fn => fn(n)))
  .reduce((acc, arr) => acc + arr.filter(v => v).length, 0)

console.log(res8)

//===========================================================
console.log("===================Ejercicio 9:=========================")
const nums9 = [2, 3, 6]

const fns9 = [
  n => n + 1,
  n => n % 2 === 0,
  n => n * 3
]

const res9 = nums9
  .map(n => fns9.map(fn => fn(n)))
  .filter(arr => arr[1])
  .map(arr => arr[0] + arr[2])

console.log(res9)
//===========================================================
console.log("===================Ejercicio 10:=========================")
//Consigna: Implemente un endpoint GET que:

//Retorne el primer producto cuyo precio sea mayor a 10.000 y tenga stock disponible.
//Resultado esperado (ejemplo)
//{ "id": 3, "nombre": "Monitor", "precio": 45000, "stock": 3 }
app.get('/producto', (req, res) => {
    //Buscamos el primer producto que cumpla ambas condiciones:

    const producto = productos.find(p => p.precio > 10000 && p.stock > 0);

    //Enviamos el objeto encontrado como respuesta JSON
    res.json(producto);
});
//===========================================================
console.log("===================Ejercicio 11:=========================")
//Consigna:
//Implemente un endpoint GET que:

//Determine si todos los estudiantes tienen todas sus notas mayores o iguales a 6
//Retorne un objeto con el siguiente formato:
//{
//  "resultado": Boolean
//}
app.get('/verificar-aprobados', (req, res) => {
    //Aplicamos every a la lista de estudiantes
    const todosAprobados = estudiantes.every(estudiante => {
        //Por cada estudiante, aplicamos every a su aray de notas
        return estudiante.notas.every(nota => nota >= 6);

    });
    //Enviamos el resultado con el formato pedido
    res.json({ resultado: todosAprobados });
}
);
//===========================================================
console.log("===================Ejercicio 12:=========================")
//Consigna:
//Implemente un endpoint GET que:

//Calcule la suma total de todas las órdenes que incluyan el producto "pan"
//Determine si existe alguna orden con total mayor a 6000
//Debe retornar:

//{
//  "totalConPan": Number,
//  "hayOrdenCara": Boolean
//}
//4. Encendido del servidor(No olvidar)
app.get('/resumen-ordenes',(req, res) => {
    //1.Filtrar las que tienen "pan" y sumar sus totales
    const totalConPan = ordenes
    .filter(o => o.items.includes("pa"))
    .reduce((acc, o) => acc + o.total, 0);
    //2. exixste alguna mayor a 6000?
    const hayOrdenCara = ordenes.some(o => o.total > 6000);
    res.json({
    totalConPan: totalConPan,
    hayOrdenCara: hayOrdenCara
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});