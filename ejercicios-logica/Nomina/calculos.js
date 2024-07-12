function calcular (){

    const valorDia = 43000;
    const valorHed = 6915;
    const valorHen = 9681;
    const valorHef = 11064;
    const porcSalud = 0.04;
    const porcPension = 0.04;
    const porcAli = 0.03;

    let dias = document.getElementById("dias").value;
    let hed = document.getElementById("extraDiurna").value;
    let hen = document.getElementById("extraNocturna").value;
    let hef = document.getElementById("extraFestiva").value;

    let salario = dias*valorDia;
    let recargos = hed*valorHed+hen*valorHen+hef*valorHef;
    let deducciones = salario*porcAli+(salario+recargos)*(porcSalud+porcPension);
    let salarioNeto = salario+recargos-deducciones;

    document.getElementById("salarioBasico").value = salario.toFixed(2);
    document.getElementById("recargos").value = recargos.toFixed(2);
    document.getElementById("deducciones").value = deducciones.toFixed(2);
    document.getElementById("salarioNeto").value = salarioNeto.toFixed(2);

}