import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  checkoutForm = this.formBuilder.group({
    userName:'',
    password:''

  }) 
  constructor(private formBuilder: FormBuilder){

  }


}
