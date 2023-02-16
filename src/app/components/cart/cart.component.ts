import { Component } from '@angular/core';
import { ICartItem } from 'src/utils/productTypes';
import { CartServiceService } from 'src/app/services/cart-service.service';
import {
  faShoppingBasket,
  faShoppingCart,
  faDeleteLeft,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  shoppingCart = faShoppingCart;
  shoppingBasket = faShoppingBasket;
  deleteItem = faDeleteLeft;
  arrowLeft = faChevronCircleLeft;

  cartItems: ICartItem[] = [];

  constructor(private cartService: CartServiceService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(item: ICartItem) {
    this.cartService.removeItem(item);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  getItemCount() {
    return this.cartService.getItemCount();
  }
}
