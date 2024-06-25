import { Component } from '@angular/core';
import { ProductsServices } from '../../services/products.services';
import { Product } from '../../interfaces/product';



@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrl: './card-filter.component.css'
})
export class CardFilterComponent {
  products!: any ;
  
  constructor( private productServices: ProductsServices){}

  
  
  ngOnInit() {
    this.productServices.getProducts().subscribe((data) => {

      const lookForCategory = ['Electrodomésticos', 'non-category']

      let firstProducts: { [key: string]: Product } = {};

      

      for(const categoria of lookForCategory){
          const product = data.data.find( (p: Product) => p.category === categoria)
          
          if(product){
            firstProducts[categoria] = product;
          }
      }

      this.products = Object.values (firstProducts);
    
  })
  }
}
