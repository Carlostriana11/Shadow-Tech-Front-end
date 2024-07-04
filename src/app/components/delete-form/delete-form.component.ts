import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsServices } from '../../services/products.service'
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-deleteform',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteformComponent {
  title = 'Delete Form'
  title2 = 'Delete'
  deleteForm!: FormGroup;
  productId!: string;
  categorys: any[] = [];
  selectedId: string = '';
  
  constructor(
    private activeRouter: ActivatedRoute,
    private productService: ProductsServices,
    private categoryServices : CategoryService){
      
    this.deleteForm = new FormGroup({
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
      console.log(data)

      this.categorys = data.data
    })

    this.activeRouter.params.subscribe( params =>{
      const id = params ['id'];

      this.productService.deleteProductById(id).subscribe( data => {
        console.log(data)
        const product = data.data[0]

        this.selectedId = product._id
        console.log('hola product', product.category)

        this.deleteForm.setValue({
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
  onDelete(){
    if(this.deleteForm.value){
      console.log(this.deleteForm.value)
      this.productService.deleteProductById(this.selectedId).subscribe(data => {
      console.log(data)

    })
  }
}
}




