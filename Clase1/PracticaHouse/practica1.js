// 1. OBJETOS Y ARRAYS
//  Creamos un array de objetos para representar a los alumnos, cada objeto tiene las propiedades nombre, edad, carrera, aprobadas e ingles
const alumnoUnico = {nombre: "Juan", edad: 20, carrera: "Informatica"};

const alumnosArray = [
    {nombre: "Juan", edad: 20, carrera: "Informatica", aprobadas: 21, tieneIngles: true},
    {nombre: "Ana", edad: 22, carrera: "Derecho", aprobadas: 15, tieneIngles: false},
    {nombre: "Luis", edad: 19, carrera: "Informatica", aprobadas: 25, tieneIngles: true}
];

// Corregido: Agregamos al ARRAY, no al objeto
alumnosArray.push({nombre: "Carlos", edad: 21, carrera: "Arquitectura", aprobadas: 10, tieneIngles: true});

// 2. FILTRADO (Basado en tu lógica de Informatica + mayor a 20 años)
function filtroManual(lista){
    //lista es el array de alumnos, resultado es el nuevo array que vamos a llenar con los alumnos que cumplen la condición
    const resultado = [];
    // Recorremos cada alumno en la lista, verificamos si su edad es mayor a 20 y si su carrera es Informatica, si cumple ambas condiciones lo agregamos al resultado
    for(let i = 0; i < lista.length; i++){
        //lista[i] es el alumno actual que estamos evaluando, lista[i].edad es su edad, lista[i].carrera es su carrera
        if(lista[i].edad > 20 && lista[i].carrera === "Informatica"){
            // Si el alumno cumple las condiciones, lo agregamos al resultado usando push, que es un método de los arrays para agregar elementos al final del array
            resultado.push(lista[i]);
        }
    }
    //Al final de la función, retornamos el resultado que contiene los alumnos filtrados
    return resultado;
}
// Llamamos a la función filtroManual con el array de alumnos y mostramos el resultado en la consola
console.log("Filtro Manual:", filtroManual(alumnosArray));

// 3. MÉTODOS DE ARRAY
// 3.1 FILTER - Filtrar alumnos con 20 o más materias aprobadas y que tengan inglés
//filter es un método que nos permite crear un nuevo array con los elementos que cumplen una condición,
//en este caso queremos filtrar a los alumnos que tienen 20 o más materias aprobadas y que además tengan inglés, 
//por eso usamos alumno.aprobadas >= 20 && alumno.tieneIngles dentro del filter    
const filtrados1 = alumnosArray.filter((alumno) => {
    //alumno es el elemento actual del array que estamos evaluando, alumno.aprobadas es el numero de materias aprobadas, alumno.tieneIngles es un booleano que indica si el alumno tiene inglés
    return alumno.aprobadas >= 20 && alumno.tieneIngles;
});
// El resultado de filter es un nuevo array que contiene solo los alumnos que cumplen la condición, lo mostramos en la consola
console.log("Filtrados (Filter):", filtrados1);

// 3.2 MAP - Obtener solo los nombres de los alumnos
//map es un método que nos permite transformar cada elemento del array en algo nuevo, en este caso queremos obtener solo los nombres de los alumnos, por eso usamos alumno.nombre dentro del map
const nombres = alumnosArray.map((alumno) => alumno.nombre);
console.log("Nombres (Map):", nombres);

// 3.3 REDUCE - Calcular el total de materias aprobadas por todos los alumnos
//reduce es un método que nos permite acumular un valor a través de las iteraciones del array, en este caso queremos sumar el número de materias aprobadas de todos los alumnos
const totalAprobadas = alumnosArray.reduce((acumulador, alumno) => {
    //acumulador es el valor que se va acumulando, alumno es el elemento actual del array que se está procesando
    return acumulador + alumno.aprobadas;
}, 0);
console.log("Total Materias (Reduce):", totalAprobadas);
//en fin vimos como crear un array de objetos, 
// agregar un nuevo objeto al array, filtrar el array usando una función manual y usando el método filter, 
// obtener un nuevo array con solo los nombres usando map y calcular el total de materias aprobadas usando reduce.