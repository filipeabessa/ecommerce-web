import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductModel } from '../../models/product.models';

@Component({
  selector: 'app-create-product-card',
  templateUrl: './create-product-card.component.html',
  styleUrls: ['./create-product-card.component.scss'],
})
export class CreateProductCardComponent implements OnInit {
  @Input() createProductFormGroup: FormGroup;
  @Output() createProduct = new EventEmitter<ProductModel>();
  createProductPayload: ProductModel;

  onSubmit() {
    this.createProductPayload = this.createProductFormGroup.value;
    this.createProduct.emit(this.createProductPayload);
  }

  ngOnInit(): void {}
}
