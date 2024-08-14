import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-swtich',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swtich.component.html',
  styleUrl: './swtich.component.css'
})
export class SwtichComponent {

  dia: string = "";

}
