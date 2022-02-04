import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productsUrl = 'api/products';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this._productsUrl);
  }
}
