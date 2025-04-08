class Cachorro {
    constructor(nome) {
        this._nome = nome;
        this._comportamento = 0;
    }

    get nome() {
        return this._nome;
    }
}