import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventosService {

  private apiUrl = 'https://66aba439636a4840d7cb72d0.mockapi.io/';

  constructor(private http:HttpClient) { }  
  // private http = inject(HttpClient); //Otra forma en lugar del contructor

  obtenerE (){
    return this.http.get(this.apiUrl+'/listaEventos');
  }

  registroE(datos:Object){
    return this.http.post(this.apiUrl+'/listaEventos',datos);
  }

  

}
