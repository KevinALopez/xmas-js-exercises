function getPromedio(notas) {
    const sumaDeNotas = notas.reduce((suma, nota) => suma + nota, 0);

    return sumaDeNotas / notas.length;
}

function getCantidadEstudiantesAprobados(notas) {
    return notas.reduce(
        (numEstudiantesAprobados, nota) =>
            nota >= 60 ? numEstudiantesAprobados + 1 : numEstudiantesAprobados,
        0
    );
}

function analizarNotas(notas) {
    const infoNotas = {
        promedio: getPromedio(notas),
        notaMasAlta: Math.min(...notas),
        notaMasBaja: Math.max(...notas),
        estudiantesAprobados: getCantidadEstudiantesAprobados(notas),
    };

    return infoNotas;
}

const notas = [85, 92, 78, 60, 55, 89, 73, 47, 99, 68, 81, 50];

console.table(analizarNotas(notas));
