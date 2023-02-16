import { Component } from '@angular/core';
import {
  faTimes,
  faSearch,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faSearch = faSearch;
  faShoppingCart = faCartShopping;
  constructor(private cartService: CartServiceService) {}

  getTotalCount() {
    return this.cartService.getItemCount();
  }
}
