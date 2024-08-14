import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  color:string = "";
  desabilitar = true;

  funHabilitar(){
    this.desabilitar = !this.desabilitar;
  }

  src = "https://www.subexpuesta.com/img/content/paisajes-naturales_1.webp";

}
