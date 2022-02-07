import { Product } from '../../../types/index';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: Array<Product>;

  constructor() {
    this.products = [
      {
        title: 'Bola',
        price: 10,
        content: 'Bola de futebol',
      },
      {
        title: 'Bola',
        price: 10,
        content: 'Bola de futebol',
      },
      {
        title: 'Bola',
        price: 10,
        content: 'Bola de futebol',
      },
      {
        title: 'Bola',
        price: 10,
        content: 'Bola de futebol',
      },
    ];
  }
}
