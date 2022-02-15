import { EditProductParams, ProductModel } from './../../models/product.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../api/product.service';
import { select, Store } from '@ngrx/store';
import {
  deleteProductRequest,
  editProductRequest,
  retrieveProductRequest,
} from '../../store/products.actions';
import { ProductsState, retrieveProduct } from '../../store/products.reducer';
import { AuthState, getToken } from 'src/app/auth/store/auth.reducer';
import { Observable, Subscription } from 'rxjs';
import { checkForToken } from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'app-product-detail-container',
  templateUrl: './product-detail-container.component.html',
  styleUrls: ['./product-detail-container.component.scss'],
  providers: [ProductService],
})
export class ProductDetailContainerComponent implements OnInit {
  product$: Observable<ProductModel | null>;
  token: string | null;
  token$: Observable<string | null>;
  getTokenSubscription: Subscription;
  productId: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private productsStore: Store<ProductsState>,
    private authStore: Store<AuthState>
  ) {}

  ngOnInit() {
    this.token$ = this.authStore.pipe(select(getToken));
    this.product$ = this.productsStore.pipe(select(retrieveProduct));
    this.authStore.dispatch(checkForToken());

    this.getTokenSubscription = this.token$.subscribe((token) => {
      if (token) {
        this.token = token;
        if (this.productId) {
          this.productsStore.dispatch(
            retrieveProductRequest({
              id: this.productId,
              token: token,
            })
          );
        }
      } else if (token === undefined) {
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnDestroy() {
    this.getTokenSubscription.unsubscribe();
  }

  onDeleteProduct() {
    this.productsStore.dispatch(
      deleteProductRequest({ id: this.productId, token: this.token })
    );
  }

  onEditProduct(event: EditProductParams) {
    const editParams: EditProductParams = {};
    if (event.title) {
      editParams['title'] = event.title;
    }
    if (event.content) {
      editParams['content'] = event.content;
    }
    if (event.price) {
      editParams['price'] = event.price;
    }
    this.productsStore.dispatch(
      editProductRequest({
        id: this.productId,
        token: this.token,
        editParams: editParams,
      })
    );
  }
}
