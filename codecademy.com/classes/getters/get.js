class Cachorro {
    constructor(nome) {
        this._nome = nome;
        this._comportamento = 0;
        this._criadoQuando = new Date();
    }

    get nome() {                                        //  exemplos de uso:
        return this._nome.toUpperCase();                //      console.log(scooby.nome)
    }                                                   // console: SCOOBY
    // é usado para mostrar propriedades formatadas em uma forma específica, ou apenas para mantê-las seguras


}

const scooby = new Cachorro('scooby');                  // ^
console.log(scooby.nome);