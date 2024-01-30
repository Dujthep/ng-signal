import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Example1Service {
  private item: ItemType[] = [
    { name: 'Product A', price: 10, id: 1 },
    { name: 'Product B', price: 15, id: 2 },
    { name: 'Product C', price: 20, id: 3 },
  ];
  constructor() {}

  getItem(): ItemType[] {
    return this.item;
  }

  removeItem(lists: ItemType[], item: ItemType) {
    return lists.filter((i) => i !== item);
  }

  calculateTotalPrice(items: ItemType[]): number {
    return items.reduce((acc, curr) => acc + curr.price, 0);
  }
}

export type ItemType = {
  name: string;
  price: number;
  id: number
};
