import { Product } from 'src/types';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { ProductsState, getProducts } from '../../store/products.reducer';
import { getProductsRequest } from '../../store/products.actions';

@Component({
  selector: 'app-products-list-container',
  templateUrl: './products-list-container.component.html',
  styleUrls: ['./products-list-container.component.scss'],
})
export class ProductsListContainerComponent implements OnInit {
  products$: Observable<Array<Product>>;
  getProductsSubscription: Subscription;

  constructor(private productsStore: Store<ProductsState>) {}

  ngOnInit() {
    this.products$ = this.productsStore.pipe(select(getProducts));
    this.productsStore.dispatch(getProductsRequest({}));

    this.getProductsSubscription = this.products$.subscribe();
  }

  ngOnDestroy() {
    this.getProductsSubscription.unsubscribe();
  }
}
