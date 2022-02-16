import { FailedRequest } from './../../../models/request-state.model';
import { checkForToken } from './../../../auth/store/auth.actions';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import {
  ProductsState,
  getProducts,
  getProductsRequestState,
} from '../../store/products.reducer';
import { getProductsRequest } from '../../store/products.actions';
import { ProductModel } from '../../models/product.models';
import { AuthState, getToken } from 'src/app/auth/store/auth.reducer';
import { Router } from '@angular/router';
import { RequestState } from 'src/app/models/request-state.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-list-container',
  templateUrl: './products-list-container.component.html',
  styleUrls: ['./products-list-container.component.scss'],
})
export class ProductsListContainerComponent implements OnInit {
  token: string | null = localStorage.getItem('token');
  products$: Observable<ProductModel[]>;
  getProductsSubscription: Subscription;

  searchFormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(private productsStore: Store<ProductsState>) {}

  ngOnInit() {
    this.products$ = this.productsStore.pipe(select(getProducts));

    this.productsStore.dispatch(
      getProductsRequest({
        token: this.token,
      })
    );
    this.products$.subscribe();
    this.onSearch();
  }

  onSearch() {
    this.searchFormGroup.valueChanges.subscribe((value) => {
      const { title, price } = value;
      this.productsStore.dispatch(
        getProductsRequest({
          token: this.token,
          title,
          price,
        })
      );
    });
  }

  ngOnDestroy() {}
}
