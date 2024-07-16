// let n=1;
// while(n <= 10){
//     console.log(n);
//     n++;
// }

let numeros = [3,7,9,13,20,100];

verificarNumeros(numeros);

function verificarNumeros(numeros){

    
    let i = 0;
    while(i < numeros.length){
        validarPrimos(numeros[i]);
        i++;
    }
}

function validarPrimos (num){

    let i = 2;
    let control = 0;
    let numPrimos = [];

    if(num == 1 || num < 0){
        console.log("Ingresar un número mayor que 1");
    }

    while(num > i){

        if(num%i==0){
            console.log("El número "+num+" no es un número primo");
            control = 1;
            break;
        }
        i++;
    }

    if(control==0){
        console.log("El número "+num+" es un número primo");
        numPrimos.push
    }

}