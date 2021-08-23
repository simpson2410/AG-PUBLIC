import { Injectable } from '@angular/core';
import { ptype } from './ptype';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PtypeService {

  // Node/Express API
  REST_API: string = 'http://localhost:8002/api/ptype';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Add
  Addptype(data: ptype): Observable<any> {
    let API_URL = `${this.REST_API}/add-ptype`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all objects
  Getptypes() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single object
  Getptype(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-ptype/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }


  // Update
  updateptype(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-ptype/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete
  deleteptype(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-ptype/${id}`;
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
