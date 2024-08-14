import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-messages.component.html',
  styleUrl: './add-messages.component.css'
})
export class AddMessagesComponent {

  constructor(public messagesService: MessagesService){}

  message: string = "";

  addMenssage(){
    this.messagesService.add(this.message);
    console.log(this.messagesService.messages)
  }

}
