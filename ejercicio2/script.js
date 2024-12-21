function contarParesImpares(arrayNumeros) {
    const paresImparesCount = {
        pares: 0,
        impares: 0,
    };

    arrayNumeros.forEach((number) => {
        if (number % 2 === 0) {
            paresImparesCount.pares += 1;
        } else {
            paresImparesCount.impares += 1;
        }
    });

    return paresImparesCount;
}

const numbers = [3, 12, 7, 18, 21, 6, 15, 4, 29, 10];

console.log(contarParesImpares(numbers));
