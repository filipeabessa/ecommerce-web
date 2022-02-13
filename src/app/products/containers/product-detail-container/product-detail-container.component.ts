import { ProductModel } from './../../models/product.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../api/product.service';
import { select, Store } from '@ngrx/store';
import { deleteProductRequest } from '../../store/products.actions';
import { ProductsState } from '../../store/products.reducer';
import { AuthState, getToken } from 'src/app/auth/store/auth.reducer';
import { Observable } from 'rxjs';
import { checkForToken } from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'app-product-detail-container',
  templateUrl: './product-detail-container.component.html',
  styleUrls: ['./product-detail-container.component.scss'],
  providers: [ProductService],
})
export class ProductDetailContainerComponent implements OnInit {
  product: ProductModel;
  productId: number = Number(this.route.snapshot.paramMap.get('id'));
  token$: Observable<string | null>;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private productsStore: Store<ProductsState>,
    private authStore: Store<AuthState>
  ) {}

  ngOnInit() {
    this.token$ = this.authStore.pipe(select(getToken));
    this.authStore.dispatch(checkForToken());

    this.token$.subscribe((token) => {
      if (token) {
        if (this.productId) {
          this.productService
            .retrieveProduct({ id: this.productId, token: token })
            .subscribe(
              (product) => {
                this.product = product;
              },
              (error) => {
                this.router.navigate(['/404']);
                console.log(error);
              }
            );
        }
      }
    });
  }

  deleteProduct() {
    this.productsStore.dispatch(deleteProductRequest({ id: this.productId }));
  }
}
