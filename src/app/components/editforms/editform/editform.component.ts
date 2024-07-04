import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
<<<<<<< HEAD
import { ProductsServices } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
=======
import { ProductsServices } from '../../../services/products.services';
import { ActivatedRoute, Route, Router } from '@angular/router';
>>>>>>> 239d23a37b37b10c8f279c14268442d3940f6bb3
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.css'
})
export class EditformComponent {
  title = 'Edit Form'
  title2 = 'Editar'
  registerForm!: FormGroup;
  productId!: string;
  categorys: any
  selectedId: any


  constructor(
    private activeRouter: ActivatedRoute,
    private productService: ProductsServices,
    private categoryServices: CategoryService,
private router:Router
  ){

    this.registerForm = new FormGroup({
      name: new FormControl( '', []),
      description: new FormControl ( '', []),
      price: new FormControl ('', []),
      quantity: new FormControl ( '', []),
      category: new FormControl ( '', []),
      urlImage: new FormControl ( '', [])
    })
  }
  
  ngOnInit(){

    this.categoryServices.getCategorys().subscribe(data =>{
      console.log( data )


      this.categorys = data.data  
    })

    this.activeRouter.params.subscribe( params =>{
      const id = params['id'];

      this.productService.getproductById(id).subscribe( data => {
        console.log( data )
        const product = data.data[0]

        this.selectedId = product._id
        console.log('hola prodcut' ,product.category)


        this.registerForm.setValue({
          name: product.name,
          description: product?.description,
          price: product?.price,
          quantity: product?.quantity,
          category: product.category,
          urlImage: product?.urlImage   
        })
       
      })
     
    })
    
  }

  onSubmit(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
        this.productService.UpdateProductById( this.selectedId, this.registerForm.value).subscribe( data =>{
          console.log(data)
        })
        this.router.navigate(['/editformlist'])
    }
  
  }
}




