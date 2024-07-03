
function calcular () {

    let base = parseFloat(document.getElementById('base').value);
    let altura =  parseFloat(document.getElementById("altura").value);

    if(base <= 0 || altura <= 0){
        alert("La base y la altura deben ser números positivos mayores que cero");
        return;
    }

    if(isNaN(base) || isNaN(altura)){
        alert("Digite La base y la altura");
        return;
    }

    let area = (base*altura);
    let perimetro = (base+altura)*2;
    let diagonal = Math.sqrt((altura**2)+(base**2));

    document.getElementById('area').value = area;
    document.getElementById('perimetro').value = perimetro;
    document.getElementById('diagonal').value = diagonal.toFixed(3);

}

function calcularCirculo () {

    let radio = parseFloat(document.getElementById('radio').value);

    if(radio <= 0){
        alert("El radio debe ser un número positivo mayor que cero");
        return;
    }

    if(isNaN(radio)){
        alert("Digite el radio");
        return;
    }

    let area = (Math.PI*(radio**2));
    let perimetro = ((radio*2)*Math.PI);
    let diametro = radio*2;

    document.getElementById('area').value = area.toFixed(3);
    document.getElementById('perimetro').value = perimetro.toFixed(3);
    document.getElementById('diametro').value = diametro.toFixed(3);
}
