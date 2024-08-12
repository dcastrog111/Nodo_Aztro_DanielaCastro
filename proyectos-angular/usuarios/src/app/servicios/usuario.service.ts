import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/';

  constructor(private http:HttpClient) {}

  autUsuario(data:Object){
    return this.http.post(this.apiUrl+'auth/login',data)
  }

  verUsuario(token: string){
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    })
    return this.http.get(this.apiUrl+'auth/profile',{headers})
  }


}
