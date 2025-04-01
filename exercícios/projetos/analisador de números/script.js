    // array
let numbers = []

function adicionar() {
        // pega o valor para adicionar
    let numInput = Number(document.querySelector('input#numinput').value)
    
    if (numbers.includes(numInput)) {                       // verifica se o input já tem está no array
        window.alert('esse número já está na lista')
    } else if (numInput < 1 || numInput > 100) {            // verifica se o input está dentro do escopo
        window.alert('número inválido')
    } else {
        // adiciona o valor no array
    numbers.push(numInput)   
        // seleciona a lista
    let list = document.querySelector('select#arrayslist')
        // cria um option
    let elemento = document.createElement('option')
        // bota o valor do input no option
    elemento.text = `${numInput}`
        // adiciona o elemento na lista
    list.appendChild(elemento)
        // limpa o input
    document.querySelector('input#numinput').value = ''
        // foca no input
    document.querySelector('input#numinput').focus()
    }
}

function analisar() {
    if (numbers == 0) {
        window.alert('adicione algum número para poder analisar')
    } else {
        let analise = document.querySelector('div#divresultado')    // seleciona a div analise
        analise.innerHTML = ''                                      // reset div analise
    
            // length
        let arrayLength = document.createElement('p')               // cria o item "length" da analise
        let length = numbers.length                                 // pega o length do array e coloca na variavel "length"
        arrayLength.innerHTML = `há ${length} números cadastrados`  // formatação do arrayLength
        analise.appendChild(arrayLength)                            // posiciona o arrayLength dentro da div analise
    
            // sorting pra pegar o maior e o menor
        numbers.sort((a, b) => a - b)
    
            // higher
        let arrayHigher = document.createElement('p')
        let higher = numbers.at(-1)
        arrayHigher.innerHTML = `o número mais alto é: ${higher}`
        analise.appendChild(arrayHigher)
        
            // lower
        let arrayLower = document.createElement('p')
        let lower = numbers.at(0)
        arrayLower.innerHTML = `o número mais baixo é: ${lower}`
        analise.appendChild(arrayLower)
        
            // sum
        let arraySum = document.createElement('p')
        let sum = numbers.reduce((a, b) => a + b, 0)                // shorthand pra function reduce
        arraySum.innerHTML = `a soma dos números é: ${sum}`
        analise.appendChild(arraySum) 
    
            // media
        let arrayMedia = document.createElement('p')
        let media = sum / numbers.length                            // aproveita a sum pra fazer a média
        arrayMedia.innerHTML = `a média dos números é: ${media.toFixed(2)}`
        analise.appendChild(arrayMedia)
    }
}