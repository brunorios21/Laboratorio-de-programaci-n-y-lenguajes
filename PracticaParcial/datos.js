const productos = [
  { id: 1, nombre: "Mouse", precio: 1200, stock: 10 },
  { id: 2, nombre: "Teclado", precio: 3500, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 45000, stock: 3 },
  { id: 4, nombre: "Webcam", precio: 8000, stock: 5 },
  { id: 5, nombre: "Auriculares", precio: 6000, stock: 0 },
  { id: 6, nombre: "Notebook", precio: 250000, stock: 2 },
  { id: 7, nombre: "Tablet", precio: 150000, stock: 1 },
  { id: 8, nombre: "Cable HDMI", precio: 2000, stock: 20 }
];

const estudiantes = [
  { id: 1, nombre: "Ana", notas: [7, 8, 6] },
  { id: 2, nombre: "Luis", notas: [4, 5, 6] },
  { id: 3, nombre: "Carla", notas: [9, 8, 10] },
  { id: 4, nombre: "Pedro", notas: [6, 6, 6] },
  { id: 5, nombre: "Sofia", notas: [8, 7, 9] },
  { id: 6, nombre: "Juan", notas: [3, 4, 5] },
  { id: 7, nombre: "Marta", notas: [10, 10, 9] },
  { id: 8, nombre: "Diego", notas: [6, 7, 8] }
];

const ordenes = [
  { id: 1, items: ["pan", "leche"], total: 1500 },
  { id: 2, items: ["carne", "pan"], total: 4500 },
  { id: 3, items: ["verdura"], total: 800 },
  { id: 4, items: ["pan", "queso"], total: 2300 },
  { id: 5, items: ["leche", "cereal"], total: 1800 },
  { id: 6, items: ["carne", "vino"], total: 6700 },
  { id: 7, items: ["agua"], total: 600 },
  { id: 8, items: ["pan", "manteca"], total: 2100 }
];

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

// Exportamos para poder usarlos en el app.js si lo separás en archivos
module.exports = { productos, estudiantes, ordenes, ventas };