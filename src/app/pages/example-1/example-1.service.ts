import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Example1Service {
  private item: ItemType[] = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 15 },
    { name: 'Product C', price: 20 },
  ];
  constructor() {}

  getItem(): ItemType[] {
    return this.item;
  }

  removeItem(lists: ItemType[], item: ItemType) {
    return lists.filter((i) => i !== item);
  }
}

export type ItemType = {
  name: string;
  price: number;
};
