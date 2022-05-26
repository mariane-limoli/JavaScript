function alunosAprovados(array, media){

    let aprovados = [];

    for(let i=0; i<array.length; i++){

        const {nome, nota} = array[i];

        if(nota >= media){             // ==  if(array[i].nota >= media){
            aprovados.push(nome);      // ==  aprovados.push(array[i].nome)

        }
    }
    return aprovados;
}

const alunos = [
    {
        nome: 'Maria',
        nota: 5,
        turma: '7A'
    },
    {
        nome: 'jao',
        nota: 8,
        turma: '7A'
    },
    {
        nome: 'Leda',
        nota: 6,
        turma: '7A'
    },
    {
        nome: 'Ana',
        nota: 2.8,
        turma: '7A'
    },
];

console.log(alunosAprovados(alunos, 6));