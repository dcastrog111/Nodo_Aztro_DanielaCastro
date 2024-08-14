import { Component } from '@angular/core';
import { Ipersona } from '../Ipersona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {

  personas: Ipersona[] =[
    {nombre:'Daniela',edad:'31'},
    {nombre:'Deisy',edad:'33'},
    {nombre:'Juana',edad:'20'},
  ]
}
