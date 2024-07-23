//Insertar elementos a la lista desde un vector

const productos = ["Arroz","Aceite","Papa","Yuca","Ajo"];

const listaInicial = document.getElementById("lista-compra");


// Agragar usando for 

// for (i=0; i < productos.length ; i++){

//     const nuevoLi = document.createElement("li");
//     nuevoLi.textContent = productos[i];
//     listaInicial.appendChild(nuevoLi);

// }

// Agragar usando forEach y función flecha 

productos.forEach(item =>{

    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = item;
    listaInicial.appendChild(nuevoLi);
})



//Inserta elementos a la lista desde un input

function agregarProducto(){
    //const listaCompra = document.querySelector(".lista");

    const listaCompra = document.getElementById("lista-compra");
    const nuevoLi = document.createElement("li");

    const elementoInput = document.getElementById("producto");

    const productoAgregado = elementoInput.value;

    if(productoAgregado != "" ){

        nuevoLi.textContent = productoAgregado;

        listaCompra.appendChild(nuevoLi);

        elementoInput.setAttribute("placeholder","Agregar nuevo producto");
        elementoInput.value = "";
        elementoInput.style.border = "none";
    }

    else{
        
        elementoInput.setAttribute("placeholder","Campo no puede estar vacío,Ingrese un producto");
        elementoInput.style.border = "1px solid red";
    }
    
    
}