import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct, Product_Types } from 'src/utils/productTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allProducts: IProduct[] = [];
  bestsellers: IProduct[] = [];
  controllers: IProduct[] = [];
  consoles: IProduct[] = [];
  videoGames: IProduct[] = [];

  constructor(private productService: ProductsService) {}

  /**
   * @description - on initialize fetch products data and set them to appropriate buckets/states
   */
  ngOnInit() {
    this.productService.getProducts().subscribe((product) => {
      if (product) {
        this.allProducts = product;
        const bestsellers = product.filter((product) => product.is_best_seller);
        const consoles = product.filter(
          (product) =>
            product.product_type?.toLowerCase() ===
            Product_Types.console.toLowerCase()
        );

        const controllers = product.filter(
          (product) =>
            product.product_type?.toLowerCase() ===
            Product_Types.controller.toLowerCase()
        );

        const videoGames = product.filter(
          (product) =>
            product.product_type?.toLowerCase() ===
            Product_Types.vgame.toLowerCase()
        );

        this.consoles = consoles;
        this.bestsellers = bestsellers;
        this.controllers = controllers;
        this.videoGames = videoGames;
      } else {
        console.log('Products not foud');
      }
    });
  }
}
