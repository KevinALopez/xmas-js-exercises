/******************************
 * Solucion con Array de Frecuencia
 */

function getArrayFrecuency(arrayNumeros, maxNumber) {
    const arrayFrecuencia = new Array(maxNumber + 1).fill(0);

    console.log(arrayFrecuencia);

    arrayNumeros.forEach((number) => (arrayFrecuencia[number] += 1));

    console.log(arrayFrecuencia);

    return arrayFrecuencia;
}

function getDescOrderArray(arrayFrecuencia) {
    const descArrray = [];

    arrayFrecuencia.forEach((number, index) => {
        if (number === 0) {
            return;
        } else {
            for (let i = 0; i < number; i++) {
                descArrray.unshift(index);
            }
        }
    });

    return descArrray;
}

function getAscOrderArray(arrayFrecuencia) {
    const ascArray = [];

    arrayFrecuencia.forEach((number, index) => {
        if (number === 0) {
            return;
        } else {
            for (let i = 0; i < number; i++) {
                ascArray.push(index);
            }
        }
    });

    return ascArray;
}

function ordenarNumeros(arrayNumeros, orden) {
    const arrayFrecuencia = getArrayFrecuency(
        arrayNumeros,
        Math.max(...arrayNumeros)
    );

    return orden === "asc"
        ? getAscOrderArray(arrayFrecuencia)
        : getDescOrderArray(arrayFrecuencia);
}

/******************************
 *
 */

/******************************
 * Solucion con metodo propio de arrays
 */

function ordernarNumerosMetodo(arrayNumeros, orden) {
    return orden === "asc"
        ? arrayNumeros.sort((a, b) => a - b)
        : arrayNumeros.sort((a, b) => b - a);
}

/******************************
 *
 */

const numbers = [19, 5, 60, 97, 3, 55, 61, 65, 13, 81, 3];

console.log(ordenarNumeros(numbers, "asc"));

console.log(ordernarNumerosMetodo(numbers, "asc"));
