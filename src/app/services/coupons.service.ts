
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CouponsService {

  constructor( private http:HttpClient){}

    getCoupon(newCoupon: any){
      return this.http.post<any>('http://localhost:4000/api/coupons', newCoupon)
    }
  
      deleteCoupon(code: any): Observable<any> {
        return this.http.delete<any>('http://localhost:4000/api/coupons')
      }
    }


