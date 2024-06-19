import { Component, Input, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  titulo = 'login'
  button = 'register'
  text  = 'Don t have an account?'

  registroForm: FormGroup = this.formBuilder.group({
    email:['',[]],
    password: ['',[]]
  }) 

  constructor(private formBuilder: FormBuilder){

  }
}
