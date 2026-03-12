// Creamos tres objetos llamados al1, al2 y al3 con diferentes propiedades
const al1 = {nombre: "Juan", aprobadas: 21, tieneIngles: true};
const al2 = {nombre: "Maria", aprobadas: 18, tieneIngles: false};
const al3 = {nombre: "Pedro", aprobadas: 19, tieneIngles: true};
// Creamos un array llamado "alumnos" que contiene los objetos al1, al2 y al3
const alumnos = [al1, al2, al3];
// Modificamos la propiedad "aprobadas" del segundo objeto en el array "alumnos" (al2) a 20
alumnos[1]["aprobadas"] = 20;

console.log("-----------------------------------------")

console.log(alumnos);
// Agregamos un nuevo objeto al array "alumnos" utilizando el método push
alumnos.push({nombre: "Lucia", aprobadas: 22, tieneIngles: false});
// ¿Cuáles son los alumnos que tienen más materias aprobadas que 20 y tienen inglés?
function filtro(alumnos) {
    const resultado = [];
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].aprobadas > 20 && alumnos[i].tieneIngles) {
            resultado.push(alumnos[i]);
        }
    }
    return resultado;
}
// Imprimimos el array "alumnos" en la consola
console.log("Alumnos con más de 20 materias aprobadas y que tienen inglés:");
console.log(filtro(alumnos));

console.log("-----------------------------------------")

// La función "filtro" recorre el array "alumnos" y verifica si
//  cada alumno cumple con las condiciones 
// de tener más de 20 materias aprobadas y tener inglés. 
// Si un alumno cumple con ambas condiciones, se agrega al array "resultado". 
// Finalmente, la función devuelve el array "resultado" 
// con los alumnos que cumplen con los criterios establecidos.
const filtro2 = (value) => {
    return value.aprobadas > 20 && value.tieneIngles;

}
console.log("Alumnos filtrados con función flecha:");
console.log(alumnos.filter(filtro2));

console.log("-----------------------------------------")
//filtro3 es una función flecha que toma un parámetro "value"
//  y devuelve el resultado de la expresión "value.aprobadas >= 20 && value.
// tieneIngles".
const filtro3 = (value) => {
    
    return value.aprobadas >= 20 && value.tieneIngles;
    
}
console.log("Alumnos filtrados con función flecha sin return:");
console.log(alumnos.filter(filtro3));

console.log("-----------------------------------------")
//filtro4 es una función flecha que toma un parámetro "value" y 
// devuelve el resultado de la expresión 
// "value.aprobadas >= 20 && value.tieneIngles"
// sin utilizar la palabra clave "return" ni llaves.
const filtro4 = (value) => value.aprobadas >= 20 && value.tieneIngles;
alumnos.filter(filtro4);
console.log("Alumnos filtrados con función flecha sin return y sin llaves:");
console.log(alumnos.filter(filtro4));

console.log("-----------------------------------------")
// La función "filtro5" es una función recursiva que toma un valor como parámetro.
function filtro5(value) {
    const resultado = []
    // La función recorre el array "value" utilizando un bucle "for" y
    //  llama a sí misma para cada elemento del array.
    for (let i = 0; i < value.length; i++) {
        filtro5(value[i])
    }
    return resultado;
}
console.log("Alumnos filtrados con función recursiva:");
console.log(filtro5(alumnos));
console.log("-----------------------------------------")


const filtrados = alumnos.filter(value => value.aprobadas >= 20 && value.tieneIngles);

console.log("Alumnos filtrados con función flecha inline:");
console.log(filtrados);

console.log("-----------------------------------------")

// La función "find" se utiliza para encontrar el primer elemento en un array que cumple con una condición específica.
const encontrado = alumnos.find(value => value.aprobadas >= 20 && value.tieneIngles);
console.log("Primer alumno encontrado con función flecha inline:");
console.log(encontrado);

console.log("-----------------------------------------")

for (let i = 0; i < alumnos.length; i++) {
    if value[i].aprobadas >= 20 && value.tieneIngles {
        return value [i]
    }
    return unified;
} 