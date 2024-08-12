import { Component, Inject, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { IAutenticationResponse } from '../../interface/IAutenticationResponse';
import { access } from 'fs';
import { json } from 'stream/consumers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.scss'
})
export class AutenticacionComponent {

  public usuarioservice = inject(UsuarioService);
  private router = inject(Router);
  email = new FormControl();
  password = new FormControl();

  autenticarUsuario(){

    const datos = {
      "email": this.email.value,
      "password": this.password.value
    }

   
  // validaciones de email y contraseña vacia
    this.usuarioservice.autUsuario(datos).subscribe(
      respuesta => {
        console.log(respuesta);
        const resp = respuesta as IAutenticationResponse;
        sessionStorage.setItem('access_token', resp.access_token);
        alert("Ingreso Exitoso");
        this.router.navigate(['/perfil']);
      }
    )

  }

}
