function filtrarPalabrasPorLongitud(arrayPalabras, longitudMinima) {
    return arrayPalabras.filter((palabra) => palabra.length >= longitudMinima);
}

const palabras = [
    "casa",
    "programación",
    "sol",
    "tecnología",
    "código",
    "luz",
    "ventana",
    "computadora",
    "ratón",
    "teclado",
];

console.log(filtrarPalabrasPorLongitud(palabras, 10));
