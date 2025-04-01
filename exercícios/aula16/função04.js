function fatorial(n) {                                          // calculo de fatorial
    let fator = 1
    for (let contador = n; contador > 1; contador--) {
        fator *= contador
    }
    return fator
}

console.log(fatorial(5))