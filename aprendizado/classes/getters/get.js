class Cachorro {
    constructor(nome) {
        this._nome = nome;
        this._comportamento = 0;
        this._criadoQuando = new Date();
    }

    get nome() {
        return this._nome.toUpperCase();
    }
    // é usado para mostrar propriedades formatadas em uma específica forma, para adicionar uma lógica de validação ou apenas para mantê-las seguras


}

const scooby = new Cachorro('scooby');                  // adiciona o 'scooby' à classe Cachorro
console.log(scooby.nome);                               // retorna: SCOOBY