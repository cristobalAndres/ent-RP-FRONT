import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = environment.url_products;
  constructor(protected http: HttpClient) {
   }

  getProducts() {
    return this.http.get(`${this.url}/products`);
  }
  getProductId(id: string) {
    return this.http.get(`${this.url}/product/${id}`);
  }
}
