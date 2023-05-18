//function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//    this.nome = nomeDoPokemon;
//    this.tipo = tipoDoPokemon;
//}

//const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon {
    #hp = 100;
    constructor(nomeDoPokemon, tipoDOPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDOPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibehp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor(){
        super('pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}


const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;


console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()

pikachuDoAsh.exibehp()

const pikachu = new Pokemon('pikachu', 'elétrico');
//    Pikachu.atacar('choque do trovão')
//    Pikachu.nome = 'pikachu';
//    Pikachu.tipo = 'elétrico'

console.log(pikachu);
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);