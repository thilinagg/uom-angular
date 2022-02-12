import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  @Input() product!: Product;
  isDataUploading = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isDataUploading = true;
    this.productService.updateProduct(this.product).subscribe(() => {
      this.isDataUploading = false;
    });
  }
}
