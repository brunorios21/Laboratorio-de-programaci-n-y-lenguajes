// Se importa el módulo 'express' para poder crear y configurar nuestro servidor web.
const express = require('express')

// Se importan los datos del archivo JSON. 
// Nota: Aquí 'productos' almacenará todo el contenido del archivo ubicado en la carpeta data.
const productos = require('./data/productos.json')

// Se inicializa la aplicación de express.
const app = express()

// Se define el puerto en el que correrá el servidor (en este caso el 3001).
const PORT = 3001

// RUTA 1: Obtener todos los productos.
// Al acceder a 'http://localhost:3001/productos', el servidor responde con el JSON completo.
app.get('/productos', (req, res)=>{
   // res.status(200) indica que la operación fue exitosa. 
   // .json(productos) envía el contenido de la variable 'productos' al cliente.
   res.status(200).json(productos) 
})

// RUTA 2: Buscar productos por una categoría específica usando Query Params.
// Se accede como: 'http://localhost:3001/productos/categorias/find?key=tecnologia'.
app.get('/productos/categorias/find', (req, res)=>{
    // Se captura el valor que viene después de '?key=' en la URL.
    const categorias = req.query.key
    
    // .filter crea un nuevo array con todos los productos que coincidan con la categoría recibida.
    const resultado = productos.filter(p=>p.categorias===categorias)
    
    // Se devuelve el array filtrado al cliente.
    res.status(200).json(resultado)
})

// RUTA 3: Obtener un producto específico mediante su ID (Parámetro de ruta).
// Se accede como: 'http://localhost:3001/productos/3'.
app.get('/productos/:idProducto', (req, res)=>{
    // Se captura el ID que viene en la URL. IMPORTANTE: req.params siempre es un String.
    const  id = req.params.idProducto
    
    // VALIDACIÓN: isNaN comprueba si lo que envió el usuario NO es un número.
    if(isNaN(id)) {
        // Si no es un número, responde con error 400 (Bad Request).
        res.status(400).json({
            message: "El id de producto debe ser numérico."
        })
        return // El return detiene la ejecución para que no intente seguir procesando.
    }

    // Se busca el primer producto cuyo ID coincida con el ID de la URL.
    // Se usa Number(id) para transformar el String de la URL en un número y poder comparar correctamente.
    const producto = productos.find(p=>p.id===Number(id))
    
    // Si .find no encuentra nada, la variable 'producto' será undefined.
    if(!producto) {
        // Responde con error 404 (Not Found).
        res.status(404).json({
            message: `El producto con id ${id} no se encuentra registrado`
        })
        return
    }
    
    // Si lo encontró, lo envía con estado 200.
    res.status(200).json(producto)
})

// RUTA 4: Obtener un listado de categorías únicas.
app.get('/categorias', (req, res)=>{
    // 1. .map crea un array que solo contiene los nombres de las categorías de cada producto.
    // 2. .reduce se usa para "limpiar" los duplicados.
    const categorias = productos.map(p=>p.categorias)
    .reduce( (arr, ele)=>{
        // Si el elemento (categoría) no está todavía en el nuevo array 'arr'...
        if (!arr.includes(ele)) {
            // ...se agrega al array.
            arr.push(ele)
        }
        // Se retorna el acumulador para la siguiente vuelta del ciclo.
        return arr
    }, [] ) // Se inicia el acumulador como un array vacío [].
    
    // Se envía el array de categorías sin repeticiones.
    res.status(200).json(categorias)
})

// ARRANQUE DEL SERVIDOR:
// app.listen pone al servidor a "escuchar" peticiones en el puerto definido.
app.listen(PORT, (err)=>{
    // Si hay un error al intentar iniciar el servidor...
    if(err) {
        console.error(err.message)
        process.exit(1) // Detiene el proceso de Node inmediatamente.
    }
    // Mensaje de confirmación en la consola del desarrollador.
    console.log(`La apliacion esta escuchando en el puerto ${PORT}`)
})
