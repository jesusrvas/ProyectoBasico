async function cargarDatos() {
try {
// Reemplaza con la URL que te dé vercel
const response = await fetch('https://api-proyecto-basico-dek0ej8t9-jesus-r-s-projects.vercel.app');
const lista = await response.json();
console.log("Datos recibidos:", lista);
// Aquí puedes usar DOM para mostrar los datos en tu HTML
} catch (error) {
console.error("Error al conectar:", error);
}
}
cargarDatos();

