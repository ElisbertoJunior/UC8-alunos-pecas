///Aividade numero de alunos////


let numeroDeAlunos = 10;

for(let contador = 0; contador <= numeroDeAlunos; contador++){

    if(contador == 0){
        console.log("O numero atual e igual a zero.");

    } else if (contador % 2 == 0) {
        console.log(`O numero ${contador} e par.`);

    } else {
        console.log(`O numero ${contador} e impar.`);
    }

}

                 /////Resolução usando While/////


let numeroDeAlunos = 10;

let contador = 0;

while (contador <= numeroDeAlunos) {
    if(contador == 0){
        console.log("O numero atual e igual a zero.");

    } else if (contador % 2 == 0) {
        console.log(`O numero ${contador} e par.`);

    } else {
        console.log(`O numero ${contador} e impar.`);
    }

    contador++;
}


