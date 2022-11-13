class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculadoraIMC(peso, altura) {
        return peso / (altura * altura);
    }

    classificarIMC() {
        const imc = this.calculadoraIMC;
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do Peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.classificarIMC());