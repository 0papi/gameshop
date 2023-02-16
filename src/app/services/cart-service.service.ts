import { Injectable } from '@angular/core';
import { ICartItem, IProduct } from 'src/utils/productTypes';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private readonly CART_STORAGE_KEY = 'cartItems';

  cartItems: ICartItem[] = [];

  constructor() {
    const storedCartItems = localStorage.getItem(this.CART_STORAGE_KEY);
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(this.cartItems));
  }

  addItem(item: IProduct, quantity: number) {
    // check if the item is already in the cart
    const foundItem = this.cartItems.find((prod) => prod.id === item.id);

    if (foundItem) {
      // if found, increment the quantity
      foundItem.quantity += 1;
    } else {
      // if not found, add the item to the cart
      this.cartItems.push({ ...item, quantity });
    }

    this.saveToLocalStorage();
  }

  removeItem(item: ICartItem) {
    const index = this.cartItems.findIndex((prod) => prod.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  clearCart() {
    this.cartItems = [];
    this.saveToLocalStorage();
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
