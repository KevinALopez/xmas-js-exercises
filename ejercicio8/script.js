function contarVocales(string) {
    const cantidadVocales = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    };

    for (let char of string) {
        if (char === "a") cantidadVocales.a += 1;
        if (char === "e") cantidadVocales.e += 1;
        if (char === "i") cantidadVocales.i += 1;
        if (char === "o") cantidadVocales.o += 1;
        if (char === "u") cantidadVocales.u += 1;
    }

    return cantidadVocales;
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

palabras.forEach((palabra) => console.table(contarVocales(palabra)));
