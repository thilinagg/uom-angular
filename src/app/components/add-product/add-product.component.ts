import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/products.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @Output() cancelAddProduct: EventEmitter<void> = new EventEmitter<void>();

  productFrom = this.fb.group({
    productName: ['', Validators.required],
    productDescription: ['', Validators.required],
    unitPrice: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.min(50)]],
    expiryDate: ['', Validators.required],
  });

  isDataUploading = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.cancelAddProduct.emit();
  }

  get f() {
    return this.productFrom.controls;
  }

  onSubmit() {
    const values = this.productFrom.value as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productService.addProduct(values).subscribe((res) => {
      this.isDataUploading = false;
      this.productFrom.reset();
    });
  }
}
