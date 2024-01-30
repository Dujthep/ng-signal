import { Component, OnInit } from '@angular/core';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { Example2Service } from './services/example-2.service';

@Component({
  selector: 'app-example-2',
  standalone: true,
  imports: [ComponentAComponent, ComponentBComponent],
  templateUrl: './example-2.component.html',
  styleUrl: './example-2.component.css',
})
export class Example2Component implements OnInit {
  constructor(private service: Example2Service) {}

  ngOnInit(): void {
    this.service.setProducts([
      {
        id: 1,
        name: 'Apple',
        price: 20,
      },
      {
        id: 2,
        name: 'Guava',
        price: 15,
      },
      {
        id: 3,
        name: 'Pineapple',
        price: 30,
      },
      {
        id: 4,
        name: 'Grape',
        price: 40,
      },
      {
        id: 5,
        name: 'Melon',
        price: 50,
      },
    ]);
  }
}
