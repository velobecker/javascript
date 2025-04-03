let objeto = {
    nome: 'guilherme',
    sexo: 'm',
    peso: 65,
    engordar(p=0) {
        console.log('engordou')
        this.peso += p
    }}
// objetos são variáveis (guardam valores) e também podem guardar funções.

objeto.engordar(2)

console.log(objeto)