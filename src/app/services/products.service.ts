import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

let headers = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = environment.url_products;
  constructor(protected http: HttpClient) {
    headers = headers.set('token', localStorage.getItem('token'));
   }

  getProducts() {
    return this.http.get(`${this.url}/products`, { headers });
  }
  getProductId(id: string) {
    return this.http.get(`${this.url}/product/${id}`, { headers });
  }
}
