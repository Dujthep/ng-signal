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

  constructor(private service: Example1Service) {}

  ngOnInit(): void {
    this.items.set(this.service.getItem());
  }

  totalPrice = computed(() => {
    return this.items().reduce((acc, curr) => acc + curr.price, 0);
  });

  removeItem(item: ItemType) {
    this.items.set([...this.service.removeItem(this.items(), item)]);
  }
}
