import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envronment';
import { IProduct } from 'src/utils/productTypes';

@Injectable({
  providedIn: 'root',
})
export class SingleProductService {
  private apiurl = environment.product_api_url;

  constructor(private http: HttpClient) {}

  getProduct(id: string) {
    return this.http.get<IProduct>(`${this.apiurl}${id}`);
  }
}
