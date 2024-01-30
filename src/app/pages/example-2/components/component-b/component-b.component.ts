import { Component, OnInit, computed } from '@angular/core';
import { Example2Service } from '../../services/example-2.service';
import { Product } from '../../modals/example-2.modal';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.css',
})
export class ComponentBComponent implements OnInit {
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
