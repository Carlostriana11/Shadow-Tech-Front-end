
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CouponsService {

  constructor( private http:HttpClient){}
    getCoupon(newCoupon: any){
      return this.http.post<any>('http://localhost:4000/api/coupons', newCoupon)
    }
  
}

