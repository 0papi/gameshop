import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './components/home/hero/hero.component';
import { ProductsComponent } from './components/home/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

// declare application routes here
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: AllProductsComponent,
  },
  {
    path: 'products/:id',
    component: SingleProductComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    HeroComponent,
    ProductsComponent,
    ProductCardComponent,
    AllProductsComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
