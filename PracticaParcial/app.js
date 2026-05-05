// Llamamos a librería express
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Datos de ventas
const ventas = [
  { id: 1, cliente: "Ana", total: 1200, pagado: true },
  { id: 2, cliente: "Luis", total: 3500, pagado: false },
  { id: 3, cliente: "Carla", total: 8000, pagado: true },
  { id: 4, cliente: "Pedro", total: 1500, pagado: false },
  { id: 5, cliente: "Sofia", total: 2200, pagado: true },
  { id: 6, cliente: "Juan", total: 7000, pagado: true },
  { id: 7, cliente: "Marta", total: 500, pagado: false },
  { id: 8, cliente: "Diego", total: 9000, pagado: true }
];
const productos = [
  { id: 1, nombre: "Mouse", precio: 1500, stock: 10, categoria: "Periféricos" },
  { id: 2, nombre: "Teclado", precio: 2500, stock: 5, categoria: "Periféricos" },
  { id: 3, nombre: "Monitor", precio: 35000, stock: 2, categoria: "Hardware" },
  { id: 4, nombre: "Auriculares", precio: 3000, stock: 0, categoria: "Periféricos" }
];

const vehiculos = [
  { id: 1, patente: "1234", km: 1200, estado: "Bueno" },
  { id: 2, patente: "4321", km: 3500, estado: "Bueno" },
  { id: 3, patente: "1122", km: 45000, estado: "Malo" },

]
const usuarios = [

  { id: 1, nombre: "Ana", edad: 18, activo : true },
  { id: 2, nombre: "Luis", edad: 5, activo : true },
  { id: 3, nombre: "Carla", edad: 30, activo : true },
  { id: 4, nombre: "Pedro", edad: 22, activo : true },
]
const reparaciones = [
  { id: 1, tecnico: "Carlos", tipo: "PC", costo: 15000, estado: "Finalizado" },
  { id: 2, tecnico: "Ana", tipo: "Celular", costo: 8000, estado: "Pendiente" },
  { id: 3, tecnico: "Carlos", tipo: "Laptop", costo: 25000, estado: "Finalizado" },
  { id: 4, tecnico: "Luis", tipo: "PC", costo: 12000, estado: "En Proceso" },
  { id: 5, tecnico: "Ana", tipo: "Celular", costo: 5000, estado: "Finalizado" },
  { id: 6, tecnico: "Carlos", tipo: "Celular", costo: 3000, estado: "Finalizado" }
];

const herramientas = [
  { id: 1, nombre: "Llave inglesa", precio: 4500, stock: 12, estado: "Disponible" },
  { id: 2, nombre: "Destornillador", precio: 1200, stock: 0, estado: "Agotado" },
  { id: 3, nombre: "Martillo", precio: 2500, stock: 8, estado: "Disponible" },
  { id: 4, nombre: "Taladro", precio: 18000, stock: 0, estado: "Agotado" }
];

const envios = [
  { id: 1, repartidor: "Juan", costoEnvio: 1500, entregado: true },
  { id: 2, repartidor: "María", costoEnvio: 2000, entregado: false },
  { id: 3, repartidor: "Juan", costoEnvio: 1200, entregado: true },
  { id: 4, repartidor: "Carlos", costoEnvio: 2500, entregado: true }
];
const empleados = [
  { id: 1, nombre: "Lucía", puntos: 85, departamento: "Ventas" },
  { id: 2, nombre: "Federico", puntos: 40, departamento: "Ventas" },
  { id: 3, nombre: "Sofía", puntos: 90, departamento: "Soporte" },
  { id: 4, nombre: "Mateo", puntos: 70, departamento: "Ventas" }
];
const libros = [
  { id: 1, titulo: "El Quijote", paginas: 900, leido: true },
  { id: 2, titulo: "Cien años de soledad", paginas: 400, leido: false },
  { id: 3, titulo: "1984", paginas: 350, leido: true },
  { id: 4, titulo: "Don Segundo Sombra", paginas: 200, leido: false }
];

const motos = [
  { id: 1, modelo: "Zanella", km: 15000, estado: "En Reparación" },
  { id: 2, modelo: "Honda", km: 5000, estado: "Lista" },
  { id: 3, modelo: "Yamaha", km: 22000, estado: "Lista" },
  { id: 4, modelo: "Zanella", km: 8000, estado: "En Reparación" }
];


// Sumar el total de ventas pagadas cuyo monto no supere los 2000
app.get('/ventas', (req, res) => {
    const totalCalculado = ventas 
        .filter(v => v.pagado === true && v.total <= 2000)
        .reduce((acc, v) => acc + v.total, 0);

    console.log(totalCalculado)
    res.json({
        total: totalCalculado
    });
});

//Retornar el primer producto con el precio mayor a 10000 y stock
app.get('/producto', (req, res) => {
    //Buscamos el primer elemento (producto) que cumplan ambas condiciones
    const productoEncontrado = productos
    .find(p => p.precio > 10000 && p.stock > 0);

    //Respondemos
    console.log(productoEncontrado);
    res.json(productoEncontrado);
});

// Sume el kilometraje total de todos cuyo estado sea "Bueno"
app.get('/vehiculos', (req, res) => {
    const kilometrajeBueno = vehiculos
    .filter(v => v.estado === "Bueno")
    .reduce((acc,v) => acc + v.km,0);
    console.log(`{ "kILOMETRAJE" : "BUENO : ${kilometrajeBueno}" }`);
    res.json({
        "kILOMETRAJE": `BUENO : ${kilometrajeBueno}`
    });

});

//Resultado esperado {
//  "kILOMETRAJE" : BUENO : 19500
//}
//Retorne un arreglo con todos los usuarios que esten activos  y tengan mas de 20 años
app.get('/usuarios', (req,res)=> {
    const usuariosActivos = usuarios
    .filter(u => u.activo && u.edad > 17);

    console.log(usuariosActivos);
    res.json(usuariosActivos);

});
//Consigna:
//Creen un endpoint GET /productos/agotados que:

//Filtre únicamenos productos cuyo stock sea igual a 0.

//Muestre el resultado en la consola del servidor.

//Devuelva una respuesta en formato JSON con la siguiente estructura:

//JSON
//{
//  "estado": "PRODUCTOS AGOTADOS : 1"
//}
app.get('/productos/agotados', (req, res) =>{
    const productosAgotados = productos
    .filter(a => a.stock === 0 );
    const cantidad = productosAgotados.length;
    console.log(`{ "estado" : "Productos agotados : ${cantidad}" }`);

    res.json({
        "estado": `Productos Agotados : ${cantidad}`
    })
})
//Consigna
//Creen un endpoint GET /reparaciones/tecnico/:nombre que realice lo siguiente:

//Reciba el nombre del técnico por parámetro en la URL (por ejemplo, /reparaciones/tecnico/Carlos).

//Filtre los registros para obtener solo aquellas reparaciones cuyo técnico coincida con el parámetro de la URL y que además tengan el estado "Finalizado".

//Calcule el costo total acumulado de esas reparaciones finalizadas usando el método .reduce().

//Muestre en la consola del servidor el resumen de la operación.

//Devuelva como respuesta en el navegador el siguiente JSON:

//JSON
//{
//  "resumen": "TECNICO: Carlos | TOTAL RECAUDADO: 43000"
//}
app.get('/reparaciones/tecnico/:nombre', (req, res) => {
    const TecnicoEncontrado = reparaciones
    .filter(tecnico => req.params.nombre === tecnico.tecnico && tecnico.estado === "Finalizado")
    .reduce((acc,tecnico) => acc + tecnico.costo,0);
    console.log(`{ "resumen": "TECNICO: ${req.params.nombre} | TOTAL RECAUDADO: ${TecnicoEncontrado}" }`);
    
    res.json({
        "resumen": `TECNICO: ${req.params.nombre} | TOTAL RECAUDADO: ${TecnicoEncontrado}`
    })
})
//Consigna:
/* Creen un endpoint GET /herramientas/agotadas que:

Filtre las herramientas cuyo estado sea "Agotado".

Cuente cuántas herramientas están agotadas usando .length.

Muestre en la consola del servidor: {"estado" : "HERRAMIENTAS AGOTADAS : 2"} (o el número correspondiente).

Devuelva como respuesta en el navegador el siguiente JSON:

JSON
{
  "estado": "HERRAMIENTAS AGOTADAS : 2"
} */
app.get('/herramientas', (req,res) =>{
    const herramientasAgotadas = herramientas
    //Filtramos las herramientas cuyo estado sea "Agotado"
    .filter(h => h.stock === "Agotado");
    const cantidad2 = herramientasAgotadas.length;
    console.log(`{"estado" : "HERRAMIENTAS AGOTADAS : ${cantidad2}"}`);

    res.json({
        "Estado" : `HERRAMIENTAS AGOTADAS : ${cantidad2}`
    });
});
/* 

Consigna:
Creen un endpoint GET /envios/exitosos que:

Filtre únicamente los envíos que tengan la propiedad entregado: true.

Sume el costoEnvio de estos envíos finalizados usando el método .reduce().

Imprima el resultado en la consola del servidor con el formato {"resultado" : "COSTO TOTAL ENTREGAS : 5200"}.

Devuelva como respuesta en el navegador el siguiente JSON:

JSON
{
  "resultado": "COSTO TOTAL ENTREGAS : 5200"
} */

app.get('/envios',(req,res) => {
    const enviosExitosos = envios
    .filter(e => e.entregado === true);
    const enviosCostos = enviosExitosos 
    .reduce((acc,e) => acc+e.costoEnvio,0);

    console.log(`{"RESULTADO" : "COSTO TOTAL ENTREGAS : ${enviosCostos}"}`);

    res.json({
        "RESULTADO" :  `COSTO TOTAL ENTREGAS : ${enviosCostos}` 
    })

});  


/* 
Ejercicio 3: Evaluación de Rendimiento
Trabajamos con el siguiente listado de empleados en nuestro servidor:

JavaScript
const empleados = [
  { id: 1, nombre: "Lucía", puntos: 85, departamento: "Ventas" },
  { id: 2, nombre: "Federico", puntos: 40, departamento: "Ventas" },
  { id: 3, nombre: "Sofía", puntos: 90, departamento: "Soporte" },
  { id: 4, nombre: "Mateo", puntos: 70, departamento: "Ventas" }
];
Consigna:
Creen un endpoint GET /empleados/buen-rendimiento que realice lo siguiente:

Filtre a los empleados que tengan 70 puntos o más (puntos >= 70).

Cuente cuántos empleados cumplen esta condición utilizando la propiedad correspondiente.

Muestre el conteo en la consola del servidor con el formato {"evaluacion" : "BUEN RENDIMIENTO : 3"}.

Devuelva como respuesta en el navegador el siguiente JSON:

JSON
{
  "evaluacion": "BUEN RENDIMIENTO : 3"
}
*/
app.get('/empleados',(req,res)=> {
const empleadosRendimiento = empleados
.filter(e => e.puntos >= 70);
const empleadosPuntos = empleadosRendimiento.length;

console.log(`{"evaluacion":"BUEN RENDIMIENTO : ${empleadosPuntos}"}`);
res.json({
    "evaluacion": `BUEN RENDIMIENTO : ${empleadosPuntos}`
    });
});
/* 
Consigna:
Creen un endpoint GET /libros/leidos que realice lo siguiente:

Filtre únicamente los libros que tengan la propiedad leido como true.

Sume la cantidad de páginas (paginas) de estos libros utilizando .reduce().

Muestre el resultado en la consola del servidor con el formato: {"resumen" : "TOTAL PAGINAS LEIDAS : 1250"}.

Devuelva como respuesta en el navegador el siguiente JSON:

JSON
{
  "resumen": "TOTAL PAGINAS LEIDAS : 1250"
}
 */
app.get('/libros',(req,res)=>{
    const librosLeidos = libros
    .filter(L => L.leido === true);
    const cantidadLibros = librosLeidos
    .reduce((acc,L) => acc + L.paginas,0)

    console.log(`{"Resumen" : "Total paginas leidas" : ${cantidadLibros}"}`);
    res.json({
        "Resumen" :  `Total paginas leidas : ${cantidadLibros}`
    })
});
/* 
Consigna:
Creen un endpoint GET /motos/listas que realice lo siguiente:

Filtre únicamente las motos que tengan la propiedad estado como "Lista".

Cuente la cantidad de motos que cumplen esta condición utilizando la propiedad .length.

Muestre el resultado en la consola del servidor con el formato: {"resultado" : "MOTOS LISTAS : 2"}.

Devuelva como respuesta en el navegador el siguiente JSON:

JSON
{
  "resultado": "MOTOS LISTAS : 2"
} */
app.get('/motos', (req,res) => {
    const motosPrioridad = motos
    .filter(m => m.estado === "Lista");
    const cantidadMotos = motosPrioridad.length;
    console.log(`{"Resultado" : "Motos listas" : ${cantidadMotos}}"`);
    res.json({
        "Resultado" : `Motos listas : ${cantidadMotos}`
    }); 

});

// Encendido del servidor
app.listen(port, () => {
    console.log(`========================================================`);
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});