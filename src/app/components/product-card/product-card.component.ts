import { Component, Input } from '@angular/core';
import { IProduct } from 'src/utils/productTypes';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  shoppingCart = faShoppingCart;
}
