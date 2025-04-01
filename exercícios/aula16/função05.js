function fatorial(n) {                  // função recursiva
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)        // pega o n e faz vezes a função "fatorial(n-1)", que vai gerar um looping até chegar a 1 
    }
}

console.log(fatorial(5))