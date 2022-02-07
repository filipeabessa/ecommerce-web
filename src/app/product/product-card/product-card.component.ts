import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  product = {
    name: 'Bola',
    price: 'R$ 10,00',
    content: 'Bola de futebol',
  };

  constructor() {}

  ngOnInit(): void {}
}
