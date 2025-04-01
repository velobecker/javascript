function parimp(n) {            // "n" é só um placeholder (parâmetro formal)
    if (n % 2 == 0) {
        return 'par'            // "return" retorna o resultado para onde a função foi chamada
    } else {
        return 'impar'
    }
}

console.log(parimp(254))        // pode imprimir direto

let resultado = parimp(273)     // ou colocar em uma função
console.log(resultado)