import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario3',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css'
})
export class Formulario3Component {

  get name (){
    return this.formulario.get('name') as FormControl;
  }

  formulario = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  });
  // name = new FormControl('', Validators.required);
  // email = new FormControl('', [Validators.required, Validators.email]);

  mostrar(){
    console.log(this.formulario.value);
  }

}
