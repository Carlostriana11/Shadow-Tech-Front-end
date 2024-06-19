import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title ="Register"
  button ='login'
  text = 'Do you already have an account'

  registroForm: FormGroup = this.formBuilder.group({
    username:['',[]],
    email:['',[]],
    password: ['',[]]
  }) 

  constructor(private formBuilder: FormBuilder){

  }
}
