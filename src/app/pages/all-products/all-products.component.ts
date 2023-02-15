import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/utils/productTypes';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((product) => (this.products = product));
  }
}
