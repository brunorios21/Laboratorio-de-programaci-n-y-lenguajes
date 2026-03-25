// ==========================================
// PRACTICA 2: MÉTODOS AVANZADOS E INMUTABILIDAD
// ==========================================

const estudiantes = [
    { nombre: "Juan", edad: 20, carrera: "Informatica", promedio: 8.5 },
    { nombre: "Ana", edad: 22, carrera: "Derecho", promedio: 9.2 },
    { nombre: "Luis", edad: 19, carrera: "Informatica", promedio: 7.0 },
    { nombre: "Maria", edad: 25, carrera: "Medicina", promedio: 9.8 }
];

// ------------------------------------------
// 1. TEMPLATE LITERALS (Strings dinámicos)
// ------------------------------------------
// En lugar de concatenar con '+', usamos ` ` y ${}
const presentarEstudiante = (est) => {
    return `El estudiante ${est.nombre} estudia ${est.carrera} y tiene un promedio de ${est.promedio}`;
};
console.log(presentarEstudiante(estudiantes[0]));


// ------------------------------------------
// 2. DESESTRUCTURACIÓN (Extraer datos limpio)
// ------------------------------------------
const { nombre, promedio } = estudiantes[1]; // Extrae solo nombre y promedio de Ana
console.log(`${nombre} tiene un promedio de ${promedio}`);


// ------------------------------------------
// 3. MÉTODO .SOME() y .EVERY() (Validaciones)
// ------------------------------------------
// .some() devuelve true si AL MENOS UNO cumple
const hayExcelentes = estudiantes.some(est => est.promedio > 9.5);
console.log("¿Hay alumnos con promedio excelente (>9.5)?:", hayExcelentes);

// [RETO 1]: Usa .every() para saber si TODOS son mayores de 18 años.
// const todosMayores = estudiantes.every( ... );


// ------------------------------------------
// 4. TRANSFORMACIÓN CON .MAP()
// ------------------------------------------
// Vamos a crear una lista solo con los nombres en MAYÚSCULAS
const nombresGritando = estudiantes.map(est => est.nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresGritando);

// [RETO 2]: Crea un array llamado 'titulos' que diga: "Lic. Juan", "Lic. Ana", etc.
// Usa .map() para esto.


// ------------------------------------------
// 5. EL OPERADOR SPREAD (...) - Copiar sin romper
// ------------------------------------------
// Queremos agregar un alumno nuevo pero sin modificar el array original (buena práctica)
const nuevoEstudiante = { nombre: "Santi", edad: 21, carrera: "Informatica", promedio: 8.0 };

const listaActualizada = [...estudiantes, nuevoEstudiante];

console.log("Lista original (sigue teniendo 4):", estudiantes.length);
console.log("Lista nueva (tiene 5):", listaActualizada.length);