import { getProductsRequest } from './../../store/app.actions';
import { AppState, getProducts } from './../../store/app.reducer';
import { Product } from 'src/types';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Array<Product>>;
  getProductsSubscription: Subscription;

  constructor(private appStore: Store<AppState>) {}

  ngOnInit() {
    this.products$ = this.appStore.pipe(select(getProducts));
    this.appStore.dispatch(getProductsRequest({}));

    this.getProductsSubscription = this.products$.subscribe();
  }

  ngOnDestroy() {
    this.getProductsSubscription.unsubscribe();
  }
}
