//  horário
let agora = new Date()
let hora = agora.getHours()
let horaFormatado = hora.toString().padStart(2, '0')
let minuto = agora.getMinutes()
let minutoFormatado = minuto.toString().padStart(2, '0')
let horario = document.querySelector('p#hora')

horario.innerHTML = `agora é ${horaFormatado}:${minutoFormatado}`

//  elementos html
let h1 = document.querySelector('h1#h1')
let article = document.querySelector('article#article')
let imagem = document.querySelector('img#imagem')
let pfooter = document.querySelector('p#footer')

if (hora >= 0 && hora < 5) {
    h1.style.color = 'white'
    imagem.src = 'images/boa-madrugada.jpg'
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = '#333'
    article.style.backgroundColor = 'grey'
    pfooter.style.color = 'white'
} else if (hora >= 12 && hora < 18) {
    imagem.src = 'images/boa-tarde.jpg'
    document.body.style.backgroundImage = 'linear-gradient(to bottom, lightblue, lightgoldenrodyellow, orange)'
} else if (hora >= 18 && hora <= 23) {
    h1.style.color = 'white'
    article.style.backgroundColor = 'grey'
    imagem.src = 'images/boa-noite.png'
    document.body.style.backgroundImage = 'linear-gradient(to top, orange, black, black, black, black, black)'
}