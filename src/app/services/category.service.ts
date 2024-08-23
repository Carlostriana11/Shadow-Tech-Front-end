import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url:any = "http://3.17.180.192:4000/api"
  constructor(private http:HttpClient) {}

  getCategorys(){
    return this.http.get<any>(`${this.url}/categorys`)
  }
}
