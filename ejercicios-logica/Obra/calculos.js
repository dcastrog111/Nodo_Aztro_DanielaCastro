function calcular(){

    let longitud = parseFloat(document.getElementById("longitud").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let junta = (parseFloat(document.getElementById("junta").value))/100;

    let ladrillo = document.querySelectorAll('input[name=tipoLadrillo]');

    let area = longitud*altura;
    document.getElementById('area').value = area;

    let totalLadrillo;

    if(ladrillo[0].checked){

        totalLadrillo = Math.ceil((longitud * altura) / ((0.22 + junta) * (0.9 + junta)));
        document.getElementById('totalLadrillo').value = totalLadrillo;

    } else if(ladrillo[1].checked){

        totalLadrillo = Math.ceil((longitud * altura) / ((0.23 + junta) * (0.9 + junta)));
        document.getElementById('totalLadrillo').value = totalLadrillo;

    } else{

        totalLadrillo = Math.ceil((longitud * altura) / ((0.20 + junta) * (0.10 + junta)));
        document.getElementById('totalLadrillo').value = totalLadrillo;
    }

}