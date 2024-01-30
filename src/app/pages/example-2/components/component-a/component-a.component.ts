import { Component, computed } from '@angular/core';
import { Example2Service } from '../../services/example-2.service';
import { Product } from '../../modals/example-2.modal';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.css',
})
export class ComponentAComponent {
  items = computed(() => {
    return this.service.getProducts();
  });

  constructor(private service: Example2Service) {}

  ngOnInit(): void {}

  removeItem(item: Product) {
    const removedProduct = this.service.removeProduct(item);
    this.service.setProducts([...removedProduct]);
  }
}
