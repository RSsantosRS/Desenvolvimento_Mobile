nota = 4.99;

if(nota>=6){
    console.log("passou");
}
else if(nota>=4){
    console.log("5° prova");
}
else{
    console.log("reprovou");
}

//for basico
for (let i = 2; i < 10; i=i+2){
    console.log(i);
}

Alunos = ["Ana","paulo","joao"]
//acessa o priemiro endereço da lista
console.log(Alunos[0])

//for com lista
for (aluno in Alunos){
    console.log(Alunos[aluno])
}

//while JS
contagem = 0;
while (contagem < 5){
    console.log("rafael dantas");
    contagem = contagem + 1;
}


//soma de strings
x =  "rafael "
y = "Dantas"

console.log(x+y)

//usando replace para trocar palavra
z="meu amor se chama Bruna ".replace("meu","minha")
console.log(z)

"a".repeat(3) //repete o "a" 3 vezes


