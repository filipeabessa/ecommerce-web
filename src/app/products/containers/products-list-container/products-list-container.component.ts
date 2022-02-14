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

@Component({
  selector: 'app-products-list-container',
  templateUrl: './products-list-container.component.html',
  styleUrls: ['./products-list-container.component.scss'],
})
export class ProductsListContainerComponent implements OnInit {
  products$: Observable<Array<ProductModel>>;
  token$: Observable<string | null>;
  getProductsRequestState$: Observable<RequestState>;
  getProductsSubscription: Subscription;
  getTokenSubscription: Subscription;

  constructor(
    private productsStore: Store<ProductsState>,
    private authStore: Store<AuthState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.products$ = this.productsStore.pipe(select(getProducts));
    this.token$ = this.authStore.pipe(select(getToken));
    this.getProductsRequestState$ = this.productsStore.pipe(
      select(getProductsRequestState)
    );

    this.authStore.dispatch(checkForToken());

    this.getTokenSubscription = this.token$.subscribe((token) => {
      if (token) {
        this.productsStore.dispatch(
          getProductsRequest({
            token: token,
          })
        );
      }
    });
    this.getProductsRequestState$.subscribe((state) => {
      if (state.isFailed()) {
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnDestroy() {
    this.getTokenSubscription.unsubscribe();
  }
}
