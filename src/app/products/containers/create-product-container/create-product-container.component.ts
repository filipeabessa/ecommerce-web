import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductsState } from '../../store/products.reducer';
import { FormControl, FormGroup } from '@angular/forms';
import { createProductRequest } from '../../store/products.actions';

@Component({
  selector: 'app-create-product-container',
  templateUrl: './create-product-container.component.html',
  styleUrls: ['./create-product-container.component.scss'],
})
export class CreateProductContainerComponent {
  token: string | null = localStorage.getItem('token');

  constructor(
    public router: Router,
    private productsStore: Store<ProductsState>
  ) {}

  createProductFormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
    price: new FormControl(null),
  });

  onCreateProduct() {
    const { title, content, price } = this.createProductFormGroup.value;
    const numberPrice = Number(price);
    this.productsStore.dispatch(
      createProductRequest({
        title,
        content,
        price: numberPrice,
        token: this.token,
      })
    );
  }
}
