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

  // sumar(n1:number,n2:number){
  //   return n1+n2;
  // }

  // contadorNum = 0;
  // contenidoPlace="Par o impar";
  // nombreClass = "";
  // tipo="";
  // contenedor = "imgPar";

  // incrementar(){
  //   this.contadorNum = this.contadorNum+1;
  //   // this.contadorNum++;
  //   // this.contadorNum+=1;

  //   if(this.contadorNum%2===0){
  //     this.nombreClass = "par";
  //     this.tipo = "Par"
  //     this.contenedor = "imgPar"

  //   } else{
  //     this.nombreClass = "impar";
  //     this.tipo = "Impar"
  //     this.contenedor = "imgImpar"
  //   }
  // }

  // reiniciar(){
  //   this.contadorNum=0;
  //   this.nombreClass = "reiniciar";
  //   this.tipo = ""
  // }


  // alturaControl = new FormControl;
  // pesoControl = new FormControl;
  // resultado = 0;

  // calcularImc(){
  //   let altura = this.alturaControl.value;
  //   let peso = this.pesoControl.value;
  //   let imc = peso * altura;

  //   this.resultado = imc;
  // }


  // item = {
  //   pregunta: ["¿Que tipo de entorno prefieres para tus vacaciones?",
  //             "¿Te gustaría explorar un destino Nacional o Internacional?"],
  //   opciones: {
  //           pregunta1:["Playa","Montaña","Ciudad"],
  //           pregunta2:["Internacional","Nacional","Indiferente"]
  //   } ,
  //   opcUrl:["https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_1920,c_limit/playa.jpg",
  //           "https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg",
  //           "https://concepto.de/wp-content/uploads/2018/08/Londres-e1533855310803.jpg"
  //   ]
  // };

  preguntaA = ["¿Que tipo de entorno prefieres para tus vacaciones?",
    "¿Te gustaría explorar un destino Nacional o Internacional?",
    "¿Que clima prefieres durante tus vacaciones?"  
  ];

  opcionesA = [
    ["Playa","Montaña","Ciudad"],
    ["Nacional","Internacional","Indiferente"],
    ["Caluroso","Templado","Frio"]
  ]

  opcUrlA = [["https://media.gq.com.mx/photos/620e915c43f71a078a35533f/16:9/w_1920,c_limit/playa.jpg",
    "https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg",
    "https://concepto.de/wp-content/uploads/2018/08/Londres-e1533855310803.jpg"],
    
    ["https://viajarconpromociones.com/wp-content/uploads/2018/08/destinos-nacionales.jpg",
      "https://thumbs.dreamstime.com/z/poste-indicador-con-las-direcciones-viajar-destinos-66615367.jpg?ct=jpeg",
      "https://dbdzm869oupei.cloudfront.net/img/photomural/original/jpg/75116.jpg"
    ],

    ["https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/09/varios-paises-europeos-anuncian-septiembre-caluroso-historia-3148270.jpg?tf=1920x",
      "https://www.gob.mx/cms/uploads/article/main_image/66340/Dia_Internsacional_de_la_preservaci_n_de_los_Bosques_Tropicales__5_.jpg",
      "https://cdn0.ecologiaverde.com/es/posts/5/5/8/olas_de_frio_que_son_causas_y_consecuencias_4855_600.webp"
    ]
]

  indice1 = 0;

  pregunta = this.preguntaA[this.indice1];
  opcion1 = this.opcionesA[this.indice1][0];
  opcion2 = this.opcionesA[this.indice1][1];
  opcion3 = this.opcionesA[this.indice1][2];
  img1 = this.opcUrlA[this.indice1][0];
  img2 = this.opcUrlA[this.indice1][1];
  img3 = this.opcUrlA[this.indice1][2];

  siguiente () {
    this.indice1++;

    this.pregunta = this.preguntaA[this.indice1];
    this.opcion1 = this.opcionesA[this.indice1][0];
    this.opcion2 = this.opcionesA[this.indice1][1];
    this.opcion3 = this.opcionesA[this.indice1][2];
    this.img1 = this.opcUrlA[this.indice1][0];
    this.img2 = this.opcUrlA[this.indice1][1];
    this.img3 = this.opcUrlA[this.indice1][2];

  }

  atras () {

    this.indice1--;

    this.pregunta = this.preguntaA[this.indice1];
    this.opcion1 = this.opcionesA[this.indice1][0];
    this.opcion2 = this.opcionesA[this.indice1][1];
    this.opcion3 = this.opcionesA[this.indice1][2];
    this.img1 = this.opcUrlA[this.indice1][0];
    this.img2 = this.opcUrlA[this.indice1][1];
    this.img3 = this.opcUrlA[this.indice1][2];

  }

}


