function lanzarDado(caras = 6) {
    return Math.floor(Math.random() * caras + 1);
}

function lanzarDados(cantidadDados, caras = 6) {
    const resultados = [];

    for (let i = 0; i < cantidadDados; i++) {
        resultados.push(lanzarDado(caras));
    }

    return resultados;
}

function contarResultados(arrayResultados) {
    const frecuencias = {};

    arrayResultados.forEach((element) => {
        if (frecuencias.hasOwnProperty(String(element))) {
            frecuencias[String(element)] += 1;
        } else {
            frecuencias[String(element)] = 0;
        }
    });

    return frecuencias;
}

const resultados = lanzarDados(10);
const frecuencias = contarResultados(resultados);

console.log(resultados, frecuencias);
