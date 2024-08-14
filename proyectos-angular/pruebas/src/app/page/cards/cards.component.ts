import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  indice = 0;

  preguntaA = ["¿Que tipo de entorno prefieres para tus vacaciones?",
    "¿Que clima prefieres durante tus vacaciones?",
    "¿Que tipo de actividades prefieres hacer durante tus vacaciones?",
    "¿Que tipo de alojamiento prefieres?",
    "¿Cuanto tiemplo planeas quedarte de vacaciones?" ,
    "¿Cuál es tu rango de edad?"
  ];

  opcionesA = [
    ["Playa","Montaña","Ciudad"],
    ["Caluroso","Templado","Frio"],
    ["Deportes y Aventuras","Cultura y Museos","Relax y Bienestar"],
    ["Hotel de Lujo","Hostal o Albergue","Airbnb o Apartamento"],
    ["Menos de una semana","Una a dos semanas","Más de dos semanas"],
    ["Menos de 30 años","30-50 años","Más de 50 años"]
  ]

  imgUrl =[
    ["../../../assets/imagenes/imagen1.jpg","../../../assets/imagenes/imagen2.jpg","../../../assets/imagenes/imagen3.jpg"],
    ["../../../assets/imagenes/imagen1.jpg","../../../assets/imagenes/imagen2.jpg","../../../assets/imagenes/imagen3.jpg"],
    ["../../../assets/imagenes/imagen1.jpg","../../../assets/imagenes/imagen2.jpg","../../../assets/imagenes/imagen3.jpg"],
    ["../../../assets/imagenes/imagen1.jpg","../../../assets/imagenes/imagen2.jpg","../../../assets/imagenes/imagen3.jpg"],
    ["../../../assets/imagenes/imagen1.jpg","../../../assets/imagenes/imagen2.jpg","../../../assets/imagenes/imagen3.jpg"],
    ["../../../assets/imagenes/imagen1.jpg","../../../assets/imagenes/imagen2.jpg","../../../assets/imagenes/imagen3.jpg"]
  ]

  pregunta = this.preguntaA[this.indice];
  opcion1 = this.opcionesA[this.indice][0];
  opcion2 = this.opcionesA[this.indice][1];
  opcion3 = this.opcionesA[this.indice][2];
  img1 = this.imgUrl[this.indice][0];
  img2 = this.imgUrl[this.indice][1];
  img3 = this.imgUrl[this.indice][2];


  preferencias = [6];

siguiente () {

  this.indice++;

  this.pregunta = this.preguntaA[this.indice];
  this.opcion1 = this.opcionesA[this.indice][0];
  this.opcion2 = this.opcionesA[this.indice][1];
  this.opcion3 = this.opcionesA[this.indice][2];
  this.img1 = this.imgUrl[this.indice][0];
  this.img2 = this.imgUrl[this.indice][1];
  this.img3 = this.imgUrl[this.indice][2];

}

atras() {

  this.indice--;

  this.pregunta = this.preguntaA[this.indice];
  this.opcion1 = this.opcionesA[this.indice][0];
  this.opcion2 = this.opcionesA[this.indice][1];
  this.opcion3 = this.opcionesA[this.indice][2];
  this.img1 = this.imgUrl[this.indice][0];
  this.img2 = this.imgUrl[this.indice][1];
  this.img3 = this.imgUrl[this.indice][2];

}


}
