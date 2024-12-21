function generarTablaMultiplicar(numero, limite) {
    const tablaMultiplicacion = [];

    for (let i = 1; i <= limite; i++) {
        tablaMultiplicacion.push(i * numero);
    }

    return tablaMultiplicacion;
}

function printTablaMultiplicacion(numero, array) {
    array.forEach((element, index) =>
        console.log(`${numero}\t*\t${index + 1}\t= ${element}`)
    );
}

const number = 5;
const limite = 10;

console.log(`Tabla de multiplacion del ${number} hasta el ${limite}`);
printTablaMultiplicacion(number, generarTablaMultiplicar(number, limite));
