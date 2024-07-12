function calcularImc() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat((document.getElementById("altura").value))/100;

    let imc = parseFloat((peso / (altura*altura)).toFixed(1));

    calcularRango(imc);

    document.getElementById("imc").value = imc;
    
}

function calcularRango(imc){    

    let rango;

    if(imc < 18.5){
        rango = "Bajo Peso";
        document.getElementById("rango1").innerHTML = "Aumento del riesgo de comorbilidad";
        document.getElementById("rango2").innerHTML = "";
        document.getElementById("rango3").innerHTML = "";
        document.getElementById("rango4").innerHTML = "";

    } else if(imc >= 18.5 && imc < 25){
        rango = "Normal";
        document.getElementById("rango2").innerHTML = "Bajo riesgo de comorbilidad";
        document.getElementById("rango1").innerHTML = "";
        document.getElementById("rango3").innerHTML = "";
        document.getElementById("rango4").innerHTML = "";

    } else if (imc >= 25 && imc < 30){
        rango = "Sobrepeso";
        document.getElementById("rango3").innerHTML = "Aumento del riesgo de comorbilidad";
        document.getElementById("rango2").innerHTML = "";
        document.getElementById("rango1").innerHTML = "";
        document.getElementById("rango4").innerHTML = "";

    } else {
        rango = "Obesidad";
        document.getElementById("rango4").innerHTML = "Riesgo severo de comorbilidad";
        document.getElementById("rango2").innerHTML = "";
        document.getElementById("rango3").innerHTML = "";
        document.getElementById("rango1").innerHTML = "";
    }

    document.getElementById("rango").value = rango;
}