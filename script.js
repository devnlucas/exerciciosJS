// ex01
const numeros = [1, 2, 3, 4, 5];
numeros.pop();
console.log(numeros); 

// ex02
const filmes = ["Filme A", "Filme B", "Filme C"];
filmes.unshift("Novo Filme");
console.log(filmes); 

// ex03
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

const media = calcularMedia(7, 8, 9);
if (media >= 7) {
    console.log(`Aprovado com média ${media.toFixed(2)}`);
} else {
    console.log(`Reprovado com média ${media.toFixed(2)}`);
}

// ex04
function verificarMaioridade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(verificarMaioridade(20));
console.log(verificarMaioridade(15));

// ex05
function converterEmMinutos(horas) {
    return horas * 60;
}

console.log(converterEmMinutos(2));

// ex06
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    paginas: 1200
};

console.log(`O livro "${livro.titulo}" foi escrito por ${livro.autor} e tem ${livro.paginas} páginas.`);

// ex07
const carro = {
    modelo: "Fusca",
    ano: 1975,
    ligado: false
};

carro.ligado = true;
console.log(carro);

// ex08
const frutas = ["maçã", "banana", "uva", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Eu gosto de ${frutas[i]}`);
}

// ex09
function maiorNumero(arr) {
    return Math.max(...arr);
}

const lista = [10, 20, 5, 30, 15];
console.log(maiorNumero(lista));

// ex bonus
const aluno1 = { nome: "Ana", nota1: 8, nota2: 7 };
const aluno2 = { nome: "Bruno", nota1: 6, nota2: 7 };
const aluno3 = { nome: "Carla", nota1: 9, nota2: 10 };

const turma = [aluno1, aluno2, aluno3];

for (let i = 0; i < turma.length; i++) {
    const aluno = turma[i];
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome} - Média: ${media.toFixed(2)}`);
}
