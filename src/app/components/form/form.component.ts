import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() 
  title: string = '';
  texto: String = '';

  registroForm: FormGroup = this.formBuilder.group({
    email:['',[]],
    password: ['',[]]
  }) 


  constructor(private formBuilder: FormBuilder){

  }


}
