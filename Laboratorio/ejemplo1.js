
// Declaración de un objeto literal
//var significa que es una variable, objeto es el nombre de la variable, y las llaves indican que es un objeto literal
//var objeto = {
//    key1:valor1,
//    key2:valor2,
//    key3:valor3
 // Las claves (key) son los nombres de las propiedades del objeto,
 // y los valores (valor) son los datos asociados a esas propiedades.
// const (referencia constante) se utiliza para declarar un objeto que no se puede reasignar, 
// pero sus propiedades sí pueden ser modificadas.
// ...existing code...
const p1 = {
    // Propiedades del objeto
    nombre: "Bruno",
    edad: 24,
    residencia: {
        calle: "Jose maria paz",
        numero: 123,
        localidad: "San miguel",
        pais: "Argentina",
        provincia: "Bs as"
    },
    // Método del objeto
    // Un método es una función que está asociada a un objeto y 
    // se utiliza para realizar acciones o cálculos relacionados con ese objeto.
    esMayor: function(value) {
        return value >= 18;
    }
};
// Acceso a las propiedades del objeto
let attribute = "edad";
// Para acceder a las propiedades del objeto, se pueden 
// utilizar dos notaciones: la notación de punto y la notación de corchetes.
// La notación de punto se utiliza para acceder a 
// las propiedades del objeto utilizando el nombre de la propiedad directamente
//  después del nombre del objeto, separado por un punto.
console.log(p1.nombre); // Acceso a la propiedad "nombre" utilizando notación de punto
        p1.edad = 18;
        p1["attribute"] = 18;
//creo un array (puede contener cualquier tipo de dato) y lo asigno a la propiedad "hobbies" del objeto p1
array = ["futbol", "tenis", "natacion"];
p1.hobbies = array;
// usamos push para agregar un nuevo elemento al array "hobbies" del objeto p1
p1.hobbies.push("correr");