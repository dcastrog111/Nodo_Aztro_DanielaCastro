import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  public usuarioservice = inject(UsuarioService); 
 
  ngOnInit(){
    const tokenU = sessionStorage.getItem('access_token');
    this.usuarioservice.verUsuario(tokenU || '').subscribe(
      respuesta => {
        console.log(respuesta);
      }
    )
  }
}
