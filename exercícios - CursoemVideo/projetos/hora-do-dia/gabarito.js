document.addEventListener('DOMContentLoaded', function () {
    let msg = document.querySelector('p#hora');
    let img = document.querySelector('img#imagem');
    let pfooter = document.querySelector('p#footer');
    let horario = new Date();
    let hora = horario.getHours();
    let horaFormatado = hora.toString().padStart(2, '0');
    let minuto = horario.getMinutes();
    let minutoFormatado = minuto.toString().padStart(2, '0');
    msg.innerHTML = `agora são ${horaFormatado}:${minutoFormatado}`;
    if (hora >= 0 && hora < 5) {            // boa madrugada
        h1.style.color = 'white';
        img.src = 'images/boa-madrugada.jpg';
        document.body.style.backgroundColor = '#333';
        article.style.backgroundColor = 'grey';
        pfooter.style.color = 'white';
    } else if (hora >= 5 && hora < 12) {    // bom dia
        document.body.style.backgroundImage = 'linear-gradient(to bottom, deepskyblue, deepskyblue, orange)';
        img.src = 'images/bom-dia.png';
    } else if (hora >= 12 && hora < 18) {   // boa tarde
        document.body.style.backgroundImage = 'linear-gradient(to bottom, lightblue, lightgoldenrodyellow, orange)';
        img.src = 'images/boa-tarde.jpg';
    } else {                                // boa noite
        h1.style.color = 'white';
        article.style.backgroundColor = 'grey';
        document.body.style.backgroundImage = 'linear-gradient(to top, orange, black, black, black, black, black)';
        img.src = 'images/boa-noite.png';
    }
});
