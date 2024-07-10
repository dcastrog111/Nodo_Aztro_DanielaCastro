const tiempos = [];

function ingresarTiempo() {

    let tiempo = parseFloat(document.getElementById("tiempo").value);

    tiempos.push(tiempo);
    
    document.getElementById('registro').value = tiempos;

    document.getElementById('tiempo').value = ""

}

function calcularPromedio(){

    let suma = 0;

    for(let i=0; i < tiempos.length ; i++){

        suma = suma + tiempos[i];

    }

    let promedio = suma / tiempos.length;

    document.getElementById('promedio').value = promedio.toFixed(3);    
}

function limpiar () {
    for(let i=0; i <= tiempos.length; i++){
        tiempos.pop(i);
    }

    document.getElementById('registro').value = ""
    document.getElementById('promedio').value = ""
}




