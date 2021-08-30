import { Injectable } from '@angular/core';
import { cart } from './cart';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Cart1Service {

  // Node/Express API
  REST_API: string = 'http://localhost:8002/api/cart';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  listcartbyCat()
  {
    return this.httpClient.get("http://localhost:8002/api/cart/");
  }
  // Add
  Addcart(data: cart): Observable<any> {
    let API_URL = `${this.REST_API}/add-cart`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all objects
  Getcarts() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single object
  Getcart(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-cart/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  GetLoaiSP(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/loaiSP/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  // Update
  updatecart(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-cart/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete
  deletecart(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-cart/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
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
