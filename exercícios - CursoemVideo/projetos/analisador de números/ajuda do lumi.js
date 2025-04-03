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
    const sum = numbers.reduce((a,b) => a + b, 0)
    const resultados = [                                        // variavel composta com os resultados
        `${numbers.length} números cadastrados`,
        `maior número: ${numbers.at(-1)}`,
        `menor número: ${numbers[0]}`,
        `soma dos números: ${sum}`,
        `média dos números: ${(sum / numbers.length).toFixed(2)}`
    ]
    resultados.forEach(texto => {   // pelo que entendi, for each [] ele preenche com p
        const p = document.createElement('p')
        p.textContent = texto
        analise.appendChild(p)
    })
}