import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, of, subscribeOn, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authData!:any
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  private url:any = "http://52.14.34.161:4000/api"
  constructor(private http:HttpClient, private router: Router) {}


  postLogin( newProduct:any){
    return this.http.post<any>(`${this.url}/auth/login`, newProduct)

    .pipe(
      tap( (response: any)=>{
        console.log(response)
        
        localStorage.setItem(' user ', JSON.stringify(response.user));
        localStorage.setItem('token', response.token!);
        
        this.userSubject.next(response.user);
    
        if (response.ok){
          this.router.navigate(['dashboard']);

        }else{
          this.router.navigate(['register'])
        }
      }),

      map( (response: any) =>{
        catchError( error =>{
          return of(false);
    
        })
      })
    )
  }

  getUser(){
    return  this.userSubject.value;  
  }


  postRegister( newRegister:any){
    return this.http.post<any>(`${this.url}/auth/register`, newRegister)

    .pipe(
      tap( (response: any)=>{
        console.log(response)
        localStorage.setItem(' user ', JSON.stringify(response.user));
        localStorage.setItem('token', response.token!);
        
        this.userSubject.next(response.user);
    
        if (response.ok){
          this.router.navigate(['dashboard']);

        }else{
          this.router.navigate(['register'])
        }
      }),

      map( (response: any) =>{
        catchError( error =>{
          return of(false);
    
        })
      })
    )
  }


  verifyToken() {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('X-Token', token);
  
    return this.http.get<any>(`${this.url}/auth/renew-token`, { headers }).pipe(
      tap((data) => {
        if (data.token) {
          // El token es válido, actualizar el token y el estado de la sesión
          localStorage.setItem('token', data.token);
          this.userSubject.next(data.userData);
        } else {
          this.router.navigate(['login']);
        }
      }),
      map((data) => !!data.token), // Retorna true si hay un token nuevo
      catchError((error: any) => {
        console.error('Error al verificar el token:', error);
        this.router.navigate(['login']);
        return of(false);
      })
    );
  }
  

  initializeSession(){
    const token = localStorage.getItem('token');

  if (token) {
    // Llama a verifyToken para validar el token y restablecer la sesión
    this.verifyToken().subscribe((isValid) => {
      if (isValid) {
        // Si el token es válido, la sesión se ha restablecido exitosamente
        this.router.navigate(['dashboard']);
      } else {
        // Si el token no es válido, redirige al login
        this.router.navigate(['login']);
      }
    });
  } else {
    // Si no hay token, redirige al login
    this.router.navigate(['login']);
  }
}
}