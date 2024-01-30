import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { Example1Service, ItemType } from './example-1.service';

@Component({
  selector: 'app-example-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-1.component.html',
  styleUrl: './example-1.component.css',
})
export class Example1Component implements OnInit {
  
  items = signal<ItemType[]>([]);
  loading = signal(false);

  totalPrice = computed(() => {
    return this.service.calculateTotalPrice(this.items());
  });

  constructor(private service: Example1Service) {}

  ngOnInit(): void {
    this.items.set(this.service.getItem());
  }

  removeItem(item: ItemType) {
    this.loading.set(true);
    setTimeout(() => {
      this.items.set([...this.service.removeItem(this.items(), item)]);
      this.loading.set(false);
    }, 3000);
  }
}
