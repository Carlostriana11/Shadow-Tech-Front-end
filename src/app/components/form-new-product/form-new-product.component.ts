import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsServices } from '../../services/products.service';

@Component({
  selector: 'app-form-new-product',
  templateUrl: './form-new-product.component.html',
  styleUrl: './form-new-product.component.css'
})
export class FormNewProductComponent {
  categories:any;
  registerformulario!: FormGroup
  titulo ='register product'

  text2 = 'Editar Producto'
  enlace = 'Editar'

  constructor(private ProductsServices: ProductsServices){
    this.registerformulario = new FormGroup({
      name: new FormControl("",[Validators.required]),
      price: new FormControl("",[Validators.required, Validators.min(0)]),
      quantity: new FormControl("",[Validators.required, Validators.min(1)]),
      category: new FormControl("",[]),
      urlImage: new FormControl("",[Validators.required]),
    

    })
  }

  registerForm(){
    if(this.registerformulario.valid){

      console.log('datos del formulario', this.registerformulario.value)
      // conectar al servicio que registra los datos contra el bakend
      this.ProductsServices.createProduct(this.registerformulario.value).subscribe(data=>{
        console.log(data)
      });
    this.registerformulario.reset(); // para recetear los campos del formulario 
    }

    
    
  }
  ngOnInit() {
    this.ProductsServices.getCategories().subscribe( data => {
      // console.log( data );
      /** data --> { ok: true, data: [...] } */
      this.categories = data.data;
    });
  }


}
