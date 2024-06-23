import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsServices } from '../../../services/products.services';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.css'
})
export class EditformComponent {
  title = 'Edit Form'
  title2 = 'Editar'

  registerForm: FormGroup = this.formBuilter.group({
    name:['',[]],
    description:['',[]],
    price:['',[]],
    quantity:['',[]],
    category:['',[]],
    urlImage:['',[]]
  })

  constructor( private formBuilter: FormBuilder, private productServices: ProductsServices){}

  // onSubmit(): void{
  //   if(this.registerForm.valid){
  //     console.log(this.registerForm.valid)
  //       this.productServices.UpdateProductById( id, newProduct)
  //   }
  // }

  ngOnInit(){
    
  }
}
