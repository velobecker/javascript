let numbers = []                                                // array
const numInput = document.querySelector('input#numinput')       // declara o input
const analise = document.querySelector('div#divresultado')      // declara a div analise
const list = document.querySelector('select#arrayslist')        // declara a lista

function adicionar() {
    const inputNum = Number(numInput.value)
    analise.innerHTML = ''
    if (numbers.includes(inputNum)) {                           // verifica se o input já tem está no array
        window.alert('esse número já está na lista')
    } else if (inputNum < 1 || inputNum > 100) {                // verifica se o input está dentro do escopo
        window.alert('número inválido')
    } else {
    numbers.push(inputNum)                                      // adiciona o valor no array
    let elemento = document.createElement('option')             // cria um option
    elemento.text = `${inputNum}`                               // bota o valor do input no option
    list.appendChild(elemento)                                  // adiciona o elemento na lista
    numInput.value = ''                                         // limpa o input
    numInput.focus()                                            // foca no input
    }
}

function analisar() {
    if (numbers.length === 0) {
        alert('adicione pelo menos número para poder analisar')
        return
    }   
    analise.innerHTML = ''                                      // reset div analise
    numbers.sort((a, b) => a - b)                               // sorting de 'numbers'

        // length
    let arrayLength = document.createElement('p')               // cria o item "length" da analise
    let length = numbers.length                                 // pega o length do array e coloca na variavel "length"
    arrayLength.innerHTML = `há ${length} números cadastrados`  // formatação do arrayLength
    analise.appendChild(arrayLength)                            // posiciona o arrayLength dentro da div analise

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