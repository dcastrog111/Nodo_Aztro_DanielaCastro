import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventosService } from '../../servicios/eventos.service';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})

export class RegistroComponent {

  constructor(private eventosService: EventosService){}

  nombreC = new FormControl();
  descripcionC = new FormControl();
  locacionC = new FormControl();
  fechaC = new FormControl();
  horaC = new FormControl();
  cuposC = new FormControl();

  registrarEvento(){

    const datosFormulario = {

      "nombre": this.nombreC.value,
      "descripcion": this.descripcionC.value,
      "locacion": this.locacionC.value,
      "fecha": this.fechaC.value,
      "hora": this.horaC.value,
      "cupos": this.cuposC.value
    }

    this.eventosService.registroE(datosFormulario).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
