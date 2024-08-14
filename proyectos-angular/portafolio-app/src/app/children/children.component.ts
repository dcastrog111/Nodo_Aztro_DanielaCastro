import { Component, input } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {

  @Input() variable?:string;

}
