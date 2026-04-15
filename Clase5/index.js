//Sirve para crear un servidor web con Node.js y Express, que es un framework de aplicaciones web para Node.js. El código importa el módulo Express, que se utiliza para manejar las solicitudes HTTP y definir rutas en la aplicación web.
const express = require('express');
//Luego, se importa un archivo JSON que contiene datos de productos. Este archivo se encuentra en la carpeta "data" y se llama "productos.json". Al importar este archivo, se asigna su contenido a la variable "productos", lo que permite acceder a los datos de los productos en el código.
const productos = require('./data/productos.json');
//Luego, se crea una instancia de la aplicacion Express, que se asigna a la variable "app". Esta instancia se utilizará para configurar y manejar las rutas y solicitudes en el servidor web.
const app = express();
const PORT = 3000;
//Funcion que se ejecuta cuando se recibe una solicitud GET a la ruta "/productos". Actualmente, el cuerpo de la función está vacío, lo que significa que no se ha definido ninguna lógica para manejar esta ruta específica. Sin embargo, esta es la estructura básica para definir una ruta en Express, y se puede agregar lógica adicional dentro de esta función para procesar la solicitud y enviar una respuesta adecuada al cliente.
app.get('/productos', (req, res) => {
   res.status(200).json(productos); 
});
app.get('/productos/categorias/find',(req,res)=>{
    const categorias = req.query.key
    const resultado = productos.filter(p=>p.categorias===categorias);
    res.status(200).json(resultado)
   });
//Luego,se define una ruta para obtener un producto específico por su ID. La ruta es "/productos/:idProducto", donde ":idProducto" es un parámetro de ruta que representa el ID del producto que se desea obtener. Dentro de la función de manejo de esta ruta, se extrae el valor del parámetro "idProducto" de la solicitud utilizando "req.params.idProducto". Luego, se busca el producto correspondiente en el array "productos" utilizando el método "find()". Si no se encuentra el producto, se devuelve una respuesta con un código de estado 404 y un mensaje de error. Si se encuentra el producto, se devuelve una respuesta con un código de estado 200 y los datos del producto en formato JSON.
app.get('/productos/:idProducto', (req,res) => {
    const id = req.params.idProducto;
    if(isNaN(id)){
        res.status(400).json({
            message: "El ID del producto debe ser numerico."
        });
        return;
    }
    // Convertir el ID a un número entero

    const producto = productos.find(p=>p.id===id)
    if(!producto){
        return res.status(404).json({
            error: 'Producto no encontrado'})
    }
    res.status(200).json(producto);

})
//Luego, se define una ruta para obtener las categorías de los productos. La ruta es "/categorias". Dentro de la función de manejo de esta ruta, se utiliza el método "map()" para iterar sobre el array "productos" y extraer las categorías de cada producto. El resultado es un nuevo array que contiene solo las categorías. Finalmente, se devuelve una respuesta con un código de estado 200 y el array de categorías en formato JSON.
app.get('/categorias',(req,res)=>{
    const categorias = productos.map(p=>p.categorias);
    // Eliminar categorías duplicadas utilizando reduce
    const sinDuplicados = categorias.reduce((arr,elemento)=>{
        if (!arr.includes(elemento)) {
            arr.push(elemento);
        }
        return arr;
    },[])
    // 
    res.status(200).json(sinDuplicados);
    res.status(200).json(categorias);
})
//A continuación, se define una ruta para la raíz del sitio web ("/"). Cuando un cliente realiza una solicitud GET a esta ruta, el servidor responde con un mensaje de texto "¡Hola, mundo!" utilizando el método "res.send()".
app.listen(PORT, (error) => {
    if (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
