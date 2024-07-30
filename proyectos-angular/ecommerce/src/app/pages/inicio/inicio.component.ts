import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  // name = "Alfonso";

  // persona = {
  //   name: "Alejandro",
  //   correo: "ale@gmail",
  //   direccion: "calle 10",
  //   telefono:"310456"
  // }

  // contadorNum = 0;
  // contenidoPlace="Escribe un número";
  // nombreClass = "";

  // incrementar(){
  //   this.contadorNum = this.contadorNum+1;
  //   // this.contadorNum++;
  //   // this.contadorNum+=1;
  //   if(this.contadorNum%2===0){
  //     this.nombreClass = "par";
  //   } else{
  //     this.nombreClass = "impar";
  //   }
  // }

  // reiniciar(){
  //   this.contadorNum=0;
  //   this.nombreClass = "reiniciar";

  // }

  // sumar(n1:number,n2:number){
  //   return n1+n2;
  // }

  alturaControl = new FormControl;
  pesoControl = new FormControl;
  resultado = 0;

  calcularImc(){
    let altura = this.alturaControl.value;
    let peso = this.pesoControl.value;
    let imc = peso * altura;

    this.resultado = imc;
  }



}
