import { Component } from '@angular/core';
import { EventosService } from '../../servicios/eventos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ver-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-eventos.component.html',
  styleUrl: './ver-eventos.component.scss'
})
export class VerEventosComponent {

  control = 2;
  datosEventos:any = {};

  constructor(private eventosService: EventosService){}

  obtenerEventos(){
    this.eventosService.obtenerE().subscribe(
      {
        next: (data) =>{
          console.log(data)
        },
        error: (er) => {
          console.log(er);
        }
      }
    )
  }

}
