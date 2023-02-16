import { Injectable } from '@angular/core';
import { ICartItem, IProduct } from 'src/utils/productTypes';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cartItems: ICartItem[] = [
    {
      id: 1,
      name: 'Asus ROG Headphones',
      description:
        'Awesome headphones with premium sound quality. Asus has been known to produce the very best gaming laptops and accessories and this pair of headphones live up to the Asus brand name.',
      price: 80,
      image:
        'https://res.cloudinary.com/ds32cvke8/image/upload/v1/media/photos/2022/11/01/ROG_headphones-png_e2gjul',
      in_stock: true,
      is_featured_product: false,
      is_best_seller: true,
      category: 'pc',
      product_type: null,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Alienware Curved Monitor',
      description:
        'The 32-inch Alienware Curved monitor has rich colors and a 120Hz refresh rate with a 5ms response time. It is great for both console gaming and PC gaming for providing an immersive experience',
      price: 120,
      image:
        'https://res.cloudinary.com/ds32cvke8/image/upload/v1/media/photos/2022/11/01/monitor_vrtwzq',
      in_stock: true,
      is_featured_product: false,
      is_best_seller: true,
      category: 'pc',
      product_type: null,
      quantity: 3,
    },
    {
      id: 3,
      name: 'Alienware Curved Monitor',
      description:
        'The 32-inch Alienware Curved monitor has rich colors and a 120Hz refresh rate with a 5ms response time. It is great for both console gaming and PC gaming for providing an immersive experience',
      price: 120,
      image:
        'https://res.cloudinary.com/ds32cvke8/image/upload/v1/media/photos/2022/11/01/monitor_vrtwzq',
      in_stock: true,
      is_featured_product: false,
      is_best_seller: true,
      category: 'pc',
      product_type: null,
      quantity: 3,
    },
  ];

  constructor() {}

  addItem(item: ICartItem) {
    // check if the item is already in the cart
    const foundItem = this.cartItems.find((prod) => prod.id === item.id);

    if (foundItem) {
      // if found, increment the quantity
      foundItem.quantity += 1;
    } else {
      // if not found, add the item to the cart
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  removeItem(item: ICartItem) {
    const index = this.cartItems.findIndex((prod) => prod.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart() {
    this.cartItems = [];
  }

  getTotal() {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  getItemCount() {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  getItems() {
    return this.cartItems;
  }
}
