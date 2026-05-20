const express = require('express');
const app = express();
const PORT = 3001;
const usuarios = [
    { "id": 1, "nombre": "Bruno", "sueldo": 1000, "rol_id": 1 },
    { "id": 2, "nombre": "Ana", "sueldo": 1500, "rol_id": 2 },
    { "id": 3, "nombre": "Carlos", "sueldo": 1200, "rol_id": 1 },
    { "id": 4, "nombre": "Maria", "sueldo": 2000, "rol_id": 2 }
];
// Aquí importamos el JSON. Asegurate de que el archivo esté en la misma carpeta
// const usuarios = require('./usuarios.json'); 
const keys = ['a', 'b', 'c'];
const arr = [4, 6, 9, 12];
const fns = {
    a: v => v,
    b: v => v % 3,
    c: v => v % 2 === 0
};

const res = arr.map(v => {
    // Esto crea un array con [valor, resto de div por 3, es par]
    return keys.map(k => fns[k](v));
}).filter(v => v[1] === 0 && v[2]);

console.log(res); 
// Resultado esperado: [[6, 0, true], [12, 0, true]]
app.get('/sueldos/:rol', (req, res) => {
    const id = parseInt(req.params.rol); 
    // Validamos que el parámetro sea un número
    if (isNaN(id)) {
        return res.status(400).json({ mensaje: 'Parámetro no válido' });
    }
    // Filtramos los usuarios que tienen el rol_id igual al id recibido
    const cumplen = usuarios
    .filter(u => u.rol_id === id);
    // Si no hay usuarios con ese rol, respondemos con un mensaje de error
    // length es una propiedad de los arrays que nos dice cuántos elementos tiene. Si es 0, significa que no encontramos ningún usuario con ese rol
    if (cumplen.length === 0) {
        // Si no hay usuarios con ese rol, respondemos con un mensaje de error
        return res.status(404).json({ mensaje: `No hay usuarios con el rol ${id}` });
    }
    // Si encontramos usuarios con ese rol, sumamos sus sueldos
    const totalSueldos = cumplen
    .reduce((acc, u) => acc + u.sueldo, 0);
    // Respondemos con el rol y la suma total de los sueldos
    res.status(200).json({ rol: id, sueldos: totalSueldos });
});
//3.Se desea implementar una funcion que reciba un valor y un callback, realice
//un procesamiento y luego ejecute el Se propone ka siguiente implementacion, la cual contiene 
//Errores conceptuales
function siempre (valor,callback){
    let suma = 0;
    
    for(let i= 0; i < valor; i++) {
        suma =+ i;
    }

callback(valor)
//3.invocacion
siempre(8,(valor) => console.log('Funcion procesada con exito ${valor}'))
}
//1. Indique que errores conceptuales tiene la implementacion.
//Deberia ejecutarse añ final del codigo""Es lo ultimo a ejecutar"(conceptualmente)
//2. Corrija la funcion para que cumpla correctamente con el comportamiento esperado
//La funcion pasada por parametro "Callback" recibe un parametro, entonces en la invocacion debo pasar el parametro Como invoco la funcion?
//3. Escriba como deberia ser la invocacion de la funcion
//4. Explique en no mas de 5 renglones como se relaciona este uso de callbacks con este metodo listen Express
//Como se relacionaban en este uso de callbacks con el metodo listen de Express

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});