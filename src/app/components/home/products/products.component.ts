import { Component, Input, Output } from '@angular/core';
import { IProduct } from 'src/utils/productTypes';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() headerText!: string;
  @Input() subText!: string;
  @Input() data: IProduct[] = [];
}
