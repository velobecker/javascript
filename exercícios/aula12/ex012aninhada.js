let agora = new Date()
let hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas`)

if (hora < 12) {
    console.log('bom dia!')
} else if (hora > 18) {
    console.log('boa noite!')    
} else {
    console.log('boa tarde!')
}