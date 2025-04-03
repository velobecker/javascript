function calcular() {
    let numero = Number(document.querySelector('input#num').value)  // mumero digitado pelo usuário
    let tab = document.querySelector('select#seltab')               // seleciona o <select> para mostrar a tabuada
    tab.innerHTML = ''                                              // clear
    for (multi = 1; multi <= 10; multi++) {                         // loop para adicionar os itens
        let item = document.createElement('option')             // cria um item
        item.text = `${numero} x ${multi} = ${numero*multi}`    // preenche o item
        item.value = `tab${multi}`                              // configura o value do item
        tab.appendChild(item)                                   // posiciona os itens adicionados dentro do <select>
    }
}