const aluno = [
    {
        nome: 'Bruno',
        nota: 8,
        turma: '9A'
    },
    {
        nome: 'Felipe',
        nota: 4,
        turma: '9B'
    },
    {
        nome: 'Sofia',
        nota: 7,
        turma: '9C'
    }
]

//foi utilizado a tecnica objeto desctruction para substituir array[i] pelos items que
//seriam utilizados
function alunosAprovados(array, media) {
    let aprovados = [];

    for (i=0; i < array.length; i++) {

        const {nome, nota} = array[i];

        if (nota >= media) {
            aprovados.push(nome);

        }
    }
    return aprovados;
}

console.log(alunosAprovados(aluno, 7));