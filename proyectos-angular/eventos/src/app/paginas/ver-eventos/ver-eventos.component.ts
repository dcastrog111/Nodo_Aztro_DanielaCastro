import { Component } from '@angular/core';
import { EventosService } from '../../servicios/eventos.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-ver-eventos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ver-eventos.component.html',
  styleUrl: './ver-eventos.component.scss'
})
export class VerEventosComponent {

  control = 2;
  datosEventos:any = {};
  idEvento = new FormControl('');
  nombreE = "";

  constructor(private eventosService: EventosService){};

  // ngOnInit(){
  //   this.obtenerEventos();
  // }


  obtenerEventosid(){
    this.eventosService.obtenerEid(this.idEvento.value) .subscribe(
      data => {
        console.log(data);
        // this.datosEventos = data;
        // console.log(this.datosEventos);
      }
    )
  }

  EliminarEventosid(){

    if(this.idEvento.value){
      this.eventosService.eliminarEid(this.idEvento.value) .subscribe(
        data => {
          console.log(data);
        }
      ) 
    } else{
      alert("Campo vacio, debe indicar un id");
    }
    
  }

  obtenerEventos(){
    this.eventosService.obtenerE().subscribe(
      data => {
        //console.log(data);
        this.datosEventos = data;
        console.log(this.datosEventos);
      }
    )
  }

  // actualizar(){
  //   let dataName = {
  //     "nombre": this.nombreE
  //   }
  //   this.eventosService.actualizarEid(this.idEvento,dataName)
  //     data => {
  //       //console.log(data);
  //       this.datosEventos = data;
  //       console.log(this.datosEventos);
  //     }
  // }

}
