import { Injectable, signal } from '@angular/core';
import { Product } from '../modals/example-2.modal';

@Injectable({
  providedIn: 'root'
})
export class Example2Service {

  private products = signal<Product[]>([]);

  setProducts(products: Product[]) {
    this.products.set(products);
  }

  getProducts() {
    return this.products();
  }

  removeProduct(product: Product) {
    return this.getProducts().filter((i) => i !== product);
  }
}
