            // array / vetor - composto de elementos identificados por uma chave de identificação
let carrosVW = ['nivus', 'polo', 'tiguan']
console.log(`carros disponíveis na garagem: ${carrosVW}`)

console.log()

carrosVW[3] = 'taos'                                        // adiciona em uma chave específica (3)
console.log(`um carro, ${carrosVW[3]}, foi adicionado.`)    // "carrosVW[3]" mostra o conteúdo da chave 3
console.log(`carros disponíveis na garagem: ${carrosVW}`)

console.log()

carrosVW.push('passat')                                     // adiciona na última chave
console.log(`um carro, ${carrosVW.at(-1)}, foi adicionado`) // .at(-1) mostra o último elemento adicionado
console.log(`carros disponíveis na garagem: ${carrosVW}`)

console.log()

console.log(`na garagem há ${carrosVW.length} carros`)
console.log(carrosVW.sort())                                // coloca em ordem crescente

console.log()

for (let posicao = 0; posicao < carrosVW.length; posicao++) {   // para mostrar os itens sem chaves
    console.log(carrosVW[posicao])
}

console.log()

for (let posicao in carrosVW){                              // repetição simplificada (funciona apenas com arrays)
    console.log(carrosVW[posicao])
}

console.log()

let polo = carrosVW.indexOf('polo')                         // procura o index de um elemento
console.log(`o Polo está na posição ${polo}`)

console.log()

let golf = carrosVW.indexOf('golf')
if (golf == -1) {                                           // "-1" aparece quando o elemento não é encontrado 
    console.log('não há um Golf na garagem')
} else {
    console.log(`o Golf está na posição ${golf}`)
}