import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productsUrl = 'api/products';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._productsUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this._productsUrl,
      product,
      this.httpOptions
    );
  }
}
