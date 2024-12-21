function generarFibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibonacciArray = [0, 1];

    for (let i = 1; i <= n - 2; i++) {
        fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i - 1]);
    }

    return fibonacciArray;
}

console.log(generarFibonacci(5)); // Debería devolver [0, 1, 1, 2, 3]
console.log(generarFibonacci(1)); // Debería devolver [0]
console.log(generarFibonacci(2)); // Debería devolver [0, 1]
console.log(generarFibonacci(10)); // Debería devolver [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(generarFibonacci(0)); // Debería devolver []
