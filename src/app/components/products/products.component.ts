import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  showAddProduct: boolean = false;
  showProductDetails: boolean = false;
  constructor() {}

  ngOnInit(): void {}

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
