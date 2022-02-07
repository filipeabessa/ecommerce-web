import { Product } from './../../../types/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail-card',
  templateUrl: './product-detail-card.component.html',
  styleUrls: ['./product-detail-card.component.scss'],
})
export class ProductDetailCardComponent implements OnInit {
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
