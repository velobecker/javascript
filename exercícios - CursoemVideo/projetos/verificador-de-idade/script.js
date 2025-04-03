function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let nascimento = document.querySelector('input#txtano').value
    let resultado = document.querySelector('p#resultado')

    if (nascimento == 0 || nascimento > ano) {                  // verificador de ano válido
        window.alert('data inválida')
    } else {
        let sex = document.getElementsByName('radsex')
        let idade = ano - nascimento
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {                                   // radio masculino
            genero = 'homem'
            if (idade >= 0 && idade < 13) {                     // criança
                img.setAttribute('src', 'images/criancaM.jpg')
            } else if (idade < 19) {                            // adolecente
                img.setAttribute('src', 'images/adoleM.jpg')
            } else if (idade < 60) {                            // adulto
                img.setAttribute('src', 'images/adultoM.jpg')
            } else {                                            // idoso
                img.setAttribute('src', 'images/idosoM.png')
            }
        } else if (sex[1].checked) {                            // radio feminino
            genero = 'mulher'
            if (idade >= 0 && idade < 13) {                     // criança
                img.setAttribute('src', 'images/criancaF.jpg')
            } else if (idade < 19) {                            // adolecente
                img.setAttribute('src', 'images/adoleF.png')
            } else if (idade < 60) {                            // adulta
                img.setAttribute('src', 'images/adultoF.jpg')
            } else {                                            // idosa
                img.setAttribute('src', 'images/idosoF.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `você é ${genero} e tem ${idade} anos`
        resultado.appendChild(img)
        img.style.marginTop = '10px'
    }
}