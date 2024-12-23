function isNewProduct(inventario, operation) {
    if (inventario.hasOwnProperty(operation.producto)) return false;
    return true;
}

function createNewProduct(inventario, operation) {
    inventario[operation.producto] = 0;
}

function isValidOperation(inventario, operation) {
    if (!(operation.tipo === "retirar")) return true;

    const canTakeProduct = operation.cantidad < inventario[operation.producto];

    if (!canTakeProduct) {
        console.log(
            `No es posible retirar la cantidad ${
                operation.cantidad
            } del producto ${operation.producto} ya que solo se encuentran ${
                inventario[operation.producto]
            } unidades en el inventario.`
        );
    }

    return canTakeProduct;
}

function executeOperation(inventario, operation) {
    if (isNewProduct(inventario, operation))
        createNewProduct(inventario, operation);

    if (!isValidOperation(inventario, operation)) return;

    if (operation.tipo === "retirar") {
        inventario[operation.producto] -= operation.cantidad;
        return;
    }

    inventario[operation.producto] += operation.cantidad;
}

function gestionarInventario(inventario, operaciones) {
    operaciones.forEach((operation) => {
        executeOperation(inventario, operation);
    });

    return inventario;
}

const inventario = { manzanas: 10, naranjas: 5, peras: 8 };
const operaciones = [
    { producto: "manzanas", tipo: "añadir", cantidad: 5 },
    { producto: "naranjas", tipo: "retirar", cantidad: 2 },
    { producto: "peras", tipo: "retirar", cantidad: 10 },
];

console.log(gestionarInventario(inventario, operaciones));
