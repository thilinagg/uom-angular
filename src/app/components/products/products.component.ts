import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  showAddProduct: boolean = false;
  showProductDetails: boolean = false;
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  addProduct() {
    this.showAddProduct = true;
  }

  cancelAddProduct() {
    this.showAddProduct = false;
  }

  productDetails() {
    this.showProductDetails = true;
  }

  closeProductDetais() {
    this.showProductDetails = false;
  }
}
