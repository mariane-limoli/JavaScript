function calculaIdade(anos){

    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade`;
}

const pessoa1 = {
    nome:'Joao',
    idade: 23
}
const pessoa2 = {
    nome:'ana',
    idade: 65
}
const pessoa3 = {
    nome:'Lauana',
    idade: 6
}

console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.apply(pessoa2, [20]));