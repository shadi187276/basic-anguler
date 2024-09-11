import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { environment } from 'src/envirment/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = environment.apiUrl;
  //product end point
  private productEndpoint = 'product';
  constructor(private http: HttpClient) {}

  // GET request to retrieve products
  getProduct(): Observable<Product[]> {
    const url = `${this.baseUrl}${this.productEndpoint}`;
    return this.http.get<Product[]>(url); // Perform the GET request
  }
}
