// ==========================================
// 1. CONFIGURACIÓN E IMPORTACIONES
// ==========================================
//comando para iniciar el proyecto: npm init -y
//comando para instalar express: npm install express

const express = require('express')
const materias = require('./data/materias.json')
//creamos una instancia de express
const app = express()
//Creamos una ruta para el endpoint "/"
const port = 5001

// ==========================================
// 2. RUTAS (ENDPOINTS)
// ==========================================
//Ejecuta la funcion y los parametros que le pasamos 
app.get('/materias', (req, res) => {
    res.status(200).json(materias)
})

app.get('/materias/:id', (req, res) => {
    const id = req.params.id
    const materia = materias.find(m => m.id === id)
    if(!materia) {
        res.status(404).json({error: "Materia no encontrada"})
    return
    }
    res.status(200).json(materia)
})

// ==========================================
// 3. FUNCIONES LÓGICAS Y CALLBACKS
// ==========================================
const faa = (value, fn) =>{
    for(let i = 1; i <= value; i ++){
        console.log(i)
    }
    fn()
}

//Ejecuta la funcion y los parametros que le pasamos
const fa = (value, fn) =>{
    //Si el valor es menor o igual a 0, ejecuta la funcion fn (value) significa que le pasamos el valor a la funcion fn)
    if(value <= 0) fn (value)
        for(let i = 1; i <= value; i ++){
            console.log(i)
        }
    fn()
}

const faa2 = ( -1, (err) =>{
    if (!err) console.log("Error: El valor debe ser mayor a 0")
        return
})
console.log("ok")

// ==========================================
// 4. INICIALIZACIÓN DEL SERVIDOR
// ==========================================
app.listen(port, (err) => {
    if(err)console.log("Error al iniciar en listen")
    console.log(`Servidor escuchando en el puerto ${port}`)
    })