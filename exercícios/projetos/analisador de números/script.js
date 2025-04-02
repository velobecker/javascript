let numbers = []                                                // array
const numInput = document.querySelector('input#numinput')       // declara o input
const analise = document.querySelector('div#divresultado')      // declara a div analise
const list = document.querySelector('select#arrayslist')        // declara a lista
function isNumero(n) {                                          // função para saber se está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {                                        // função para ver se está na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isNumero(numInput.value) && !inLista(numInput.value, numbers)) {
        numbers.push(Number(numInput.value))
        let item = document.createElement('option')
        item.text = `valor ${numInput.value} adicionado`
        list.appendChild(item)
        analise.innerHTML = ''
    } else {
        alert('valor inválido ou já encontrado na lista')
    }
    numInput.value = ''
    numInput.focus()
}
function analisar() {
    if(numInput.length ===0) {
        alert('adicione valores antes de analisar')
    } else {
        let length = numbers.length
        let maior = numbers[0]
        let menor = numbers[0]
        let soma = 0
        let media = 0
        for(let pos in numbers) {
            soma += numbers[pos]
            if (numbers[pos] > maior) {
                maior = numbers[pos]
            }
            if (numbers[pos] < menor) {
                menor = numbers[pos]
            }
        }
        media = soma / length
        analise.innerHTML = ''
        analise.innerHTML += `<p> ao todo, temos ${length} números cadastrados.</p>`
        analise.innerHTML += `<p>o maior número é ${maior}</p>`
        analise.innerHTML += `<p>o menor número é ${menor}</p>`
        analise.innerHTML += `<p>somando todos os números, temos ${soma}</p>`
        analise.innerHTML += `<p>a média dos números é ${media}</p>`        
    }
}