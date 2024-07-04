import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}

  getCategorys(){
    return this.http.get<any>('http://localhost:4000/api/categorys')
  }
}
