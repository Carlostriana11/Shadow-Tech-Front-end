import { Component } from '@angular/core';
import { ProductsServices } from '../../services/products.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    products!: any ;
    constructor( private productServices: ProductsServices){}

    ngOnInit(){
        this.productServices.getProducts().subscribe( (data) => {
          console.log(data.data)

          this.products = data.data
        })
    }
}
