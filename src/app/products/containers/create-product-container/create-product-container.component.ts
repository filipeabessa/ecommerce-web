import { checkForToken } from './../../../auth/store/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthState, getToken } from 'src/app/auth/store/auth.reducer';
import { ProductsState } from '../../store/products.reducer';
import { FormControl, FormGroup } from '@angular/forms';
import { createProductRequest } from '../../store/products.actions';

@Component({
  selector: 'app-create-product-container',
  templateUrl: './create-product-container.component.html',
  styleUrls: ['./create-product-container.component.scss'],
})
export class CreateProductContainerComponent implements OnInit {
  token: string | null;
  token$: Observable<string | null>;
  getTokenSubscription: Subscription;

  constructor(
    public router: Router,
    private productsStore: Store<ProductsState>,
    private authStore: Store<AuthState>
  ) {}

  createProductFormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
    price: new FormControl(null),
  });

  ngOnInit() {
    this.token$ = this.authStore.pipe(select(getToken));
    this.authStore.dispatch(checkForToken());

    this.getTokenSubscription = this.token$.subscribe((token) => {
      if (token) {
        this.token = token;
      } else if (token === undefined) {
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnDestroy() {
    this.getTokenSubscription.unsubscribe();
  }

  onCreateProduct() {
    const { title, content, price } = this.createProductFormGroup.value;
    this.productsStore.dispatch(
      createProductRequest({ title, content, price, token: this.token })
    );
  }
}
