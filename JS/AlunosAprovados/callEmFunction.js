const pessoa1 = {
    nome: "Dino",
    idade: 34
}

const pessoa2 ={
    nome: "Liverton",
    idade: 30
}

const pessoa3 = {
    nome: "Maria",
    idade: 24
}

function calculaIdade(anos) {
    return "Daqui a " + anos + " anos, " + this.nome + " terá " + (this.idade + anos) + " anos de idade";
}

console.log(calculaIdade.call(pessoa2, 10));

console.log(calculaIdade.apply(pessoa3, [5]));