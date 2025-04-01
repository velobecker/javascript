function verificar() {
    let start = Number(document.querySelector('input#nstart').value);               // início
    let end = Number(document.querySelector('input#nend').value)                    // fim
    let skip = Number(document.querySelector('input#nskip').value)                  // passo
    let result = document.querySelector('p#presult')                                // parágrafo de resultado

    result.innerHTML = ''       // clear do resultado sem precisar atualizar a página
    
    if (start.length == 0 || end.length == 0 || skip.length == 0) {                 // verificação de valores
        window.alert('preencha corretamente')
    } else {
        if (start < end) {                                                          // contagem positiva
            if (skip <= 0) {    // verificação do passo
                window.alert('passo inválido.')
            } else {
                for(let contador = start; contador <= end; contador += skip) {      // formula
                    result.innerHTML += `${contador} ▶️`
                }
            }
        } else {                                                                    // contagem negativa
            if (skip <= 0) {    // varificação do passo
                window.alert('passo inválido.')
            } else {
                for(let contador = start; contador >= end; contador -= skip) {  // fórmula
                result.innerHTML += `${contador} ▶️`
                }
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}