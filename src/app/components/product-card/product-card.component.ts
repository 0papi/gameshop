import { Component, Input } from '@angular/core';
import { ICartItem, IProduct } from 'src/utils/productTypes';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  shoppingCart = faShoppingCart;

  constructor(private cartService: CartServiceService) {}

  addItemToCart(item: IProduct) {
    return this.cartService.addItem(item, 1);
  }
}
