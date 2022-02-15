import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditProductParams, ProductModel } from '../../models/product.models';

@Component({
  selector: 'app-product-detail-card',
  templateUrl: './product-detail-card.component.html',
  styleUrls: ['./product-detail-card.component.scss'],
})
export class ProductDetailCardComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() deleteProduct = new EventEmitter();
  @Output() editProduct = new EventEmitter<EditProductParams>();

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

  onEditProduct(event: EditProductParams) {
    this.editProduct.emit(event);
  }
}
