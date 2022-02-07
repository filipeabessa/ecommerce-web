import { Product } from '../../../types/index';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor() {
    this.product = {
      title: 'Bola',
      price: 10,
      content: 'Bola de futebol',
    };
  }

  ngOnInit(): void {}
}