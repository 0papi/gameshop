import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProductService } from 'src/app/services/single-product.service';
import { IProduct } from 'src/utils/productTypes';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  product: IProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    in_stock: false,
    is_best_seller: false,
    is_featured_product: true,
    product_type: '',
  };

  constructor(
    private route: ActivatedRoute,
    private productService: SingleProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      // call service that gets single product and pass it the generate id
      this.productService
        .getProduct(productId as string)
        .subscribe((produce) => (this.product = produce));
    });
  }
}
