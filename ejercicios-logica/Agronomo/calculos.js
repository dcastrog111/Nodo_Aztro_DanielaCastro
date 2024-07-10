


function calcular(){

    let baseMenor = parseFloat(document.getElementById("baseMenor").value);
    let baseMayor = parseFloat(document.getElementById("baseMayor").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);

    let area = (1/2)*altura*(baseMenor+baseMayor);
    let perimetro = baseMayor+baseMenor+lado1+lado2;

    document.getElementById("area").value = area;
    document.getElementById("perimetro").value = perimetro;

}

function calcularInsumos(){

    let area = parseFloat(document.getElementById("area").value);
    let perimetro = parseFloat(document.getElementById("perimetro").value);

    let pesticida = area / 1.5;
    document.getElementById("pesticida").value = pesticida;
    document.getElementById("cerca").value = perimetro;

}