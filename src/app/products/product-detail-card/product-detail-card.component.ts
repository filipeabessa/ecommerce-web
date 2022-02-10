import { Product } from './../../../types/index';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail-card',
  templateUrl: './product-detail-card.component.html',
  styleUrls: ['./product-detail-card.component.scss'],
})
export class ProductDetailCardComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteProduct = new EventEmitter();

  constructor() {
    this.product = {
      title: 'Bola',
      price: 10,
      content: 'Bola de futebol',
    };
  }

  ngOnInit(): void {}

  onDeleteProduct() {
    this.deleteProduct.emit();
  }
}
