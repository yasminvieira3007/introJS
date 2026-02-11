
//Padrões de repertições

//for -> usado quando saber 

// for (inicializador; condição; incrementador) {
    // bloco de código a ser repetido
// }


let cursos = ["Desenvolvedor Fullstack", "Marketing Digital", "Desing UX/UI", "Curso FullCycle"]

for (let index = 0; index < cursos.length; index++) {
    console.log = (cursos[index]);
}

let alunos = ["Zenith", "Angelo", "Felipe", "Mário", "Yasmin"]

for (let i = 4;i > alunos.length ;i--){
    console.log(alunos[i])
}

for(;i >= 0;) {
    console.log( alunos[i])
    i--
}

//while usado quando não sabemos a quantidade de repetições