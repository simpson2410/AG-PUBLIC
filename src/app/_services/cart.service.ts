import { Injectable } from '@angular/core';
import { product } from './product';
import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  REST_API: string = 'http://localhost:8002/api/cart/cart';
  REST_API1: string = 'http://localhost:8002/api/product/read-product';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
  public cartItemList : any =[]
  public cartList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private httpClient: HttpClient) { }
  // Get all objects
  getCarts(){
    return this.httpClient.get(`http://localhost:8002/api/cart/`).pipe()
  }

  getProducts(){
    return this.cartList.asObservable();
  }
  addcart(payload) {
  console.log('sv',payload)
   return this.httpClient.post(`http://localhost:8002/api/cart/cart`, payload);
  }
  GetCartUser(username:any): Observable<any> {
    let API_URL = `${this.REST_API}/${username}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  GetProductID(_id:any): Observable<any> {
    let API_URL = `${this.REST_API1}/${_id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

   // Error
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
