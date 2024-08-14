import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string [] = ['a','b'];

  add (menssage: string){
    this.messages.push(menssage);
  }
}
