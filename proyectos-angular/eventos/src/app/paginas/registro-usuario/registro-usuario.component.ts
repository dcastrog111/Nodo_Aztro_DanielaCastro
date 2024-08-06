import { Component } from '@angular/core';
import { FormControl, FormControlName, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.scss'
})
export class RegistroUsuarioComponent {
  nameC = new FormControl();
  emailC = new FormControl();
  passC = new FormControl();
  conPassC = new FormControl();

  estadoCorreo = 'Hola';

  registrarUsuario(){
  }

  verificarCorreo(event: Event){

    let correoUsuario = this.emailC.value;
    if (correoUsuario == ""){
      this.estadoCorreo = 'Escribe un correo electrónico';
    } else{
      let regEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
      if(regEmail.test(correoUsuario)){
        this.estadoCorreo = "Correo Válido"
      } else{
        this.estadoCorreo = "Correo No Valido"
      }

    }

  }

}
