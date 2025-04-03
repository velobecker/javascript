let numbers = []            // array
function adicionar() {
    let numInput = Number(document.querySelector('input#numinput').value)   // pega o valor para adicionar
    if (numbers.includes(numInput)) {                       // verifica se o input já tem está no array
        window.alert('esse número já está na lista')
    } else if (numInput < 1 || numInput > 100) {            // verifica se o input está dentro do escopo
        window.alert('número inválido')
    } else {
    numbers.push(numInput)                                          // adiciona o valor no array
    let list = document.querySelector('select#arrayslist')          // seleciona a lista
    let elemento = document.createElement('option')                 // cria um option
    elemento.text = `${numInput}`                                   // bota o valor do input no option
    list.appendChild(elemento)                                      // adiciona o elemento na lista
    document.querySelector('input#numinput').value = ''             // limpa o input
    document.querySelector('input#numinput').focus()                // foca no input
    }
}
function analisar() {
    if (numbers == 0) {
        window.alert('adicione algum número para poder analisar')
    } else {
        let analise = document.querySelector('div#divresultado')    // seleciona a div analise
        analise.innerHTML = ''                                      // reset div analise
        let arrayLength = document.createElement('p')               // cria o item "length" da analise
        let length = numbers.length                                 // pega o length do array e coloca na variavel "length"
        arrayLength.innerHTML = `há ${length} números cadastrados`  // formatação do arrayLength
        analise.appendChild(arrayLength)                            // posiciona o arrayLength dentro da div analise
        numbers.sort((a, b) => a - b)                               // sorting pra pegar o maior e o menor
        let arrayHigher = document.createElement('p')               // higher
        let higher = numbers.at(-1)
        arrayHigher.innerHTML = `o número mais alto é: ${higher}`
        analise.appendChild(arrayHigher)
        let arrayLower = document.createElement('p')                // lower
        let lower = numbers.at(0)
        arrayLower.innerHTML = `o número mais baixo é: ${lower}`
        analise.appendChild(arrayLower)
        let arraySum = document.createElement('p')                  // sum
        let sum = numbers.reduce((a, b) => a + b, 0)                // shorthand pra function reduce
        arraySum.innerHTML = `a soma dos números é: ${sum}`
        analise.appendChild(arraySum)
        let arrayMedia = document.createElement('p')                // media
        let media = sum / numbers.length                            // aproveita a sum pra fazer a média
        arrayMedia.innerHTML = `a média dos números é: ${media.toFixed(2)}`
        analise.appendChild(arrayMedia)
    }
}