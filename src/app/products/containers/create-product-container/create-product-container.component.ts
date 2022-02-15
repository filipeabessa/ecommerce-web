import { checkForToken } from './../../../auth/store/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthState, getToken } from 'src/app/auth/store/auth.reducer';
import {
  createProductRequestState,
  ProductsState,
} from '../../store/products.reducer';
import { FormControl, FormGroup } from '@angular/forms';
import { createProductRequest } from '../../store/products.actions';
import { RequestState } from 'src/app/models/request-state.model';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-create-product-container',
  templateUrl: './create-product-container.component.html',
  styleUrls: ['./create-product-container.component.scss'],
})
export class CreateProductContainerComponent implements OnInit {
  token: string | null;
  token$: Observable<string | null>;
  createProductRequestState$: Observable<RequestState>;
  getTokenSubscription: Subscription;
  createProductRequestStateSubscription: Subscription;

  constructor(
    public router: Router,
    private productsStore: Store<ProductsState>,
    private authStore: Store<AuthState>,
    private alertsService: AlertsService
  ) {}

  createProductFormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
    price: new FormControl(null),
  });

  ngOnInit() {
    this.token$ = this.authStore.pipe(select(getToken));
    this.createProductRequestState$ = this.productsStore.pipe(
      select(createProductRequestState)
    );
    this.authStore.dispatch(checkForToken());

    this.createProductRequestStateSubscription =
      this.createProductRequestState$.subscribe((state) => {
        if (state.isSuccessful()) {
          console.log('success');
          this.alertsService.successSnackbar('Produto criado com sucesso');
          this.router.navigate(['/products']);
        }
      });

    this.getTokenSubscription = this.token$.subscribe((token) => {
      if (token !== null) {
        this.token = token;
      } else if (token === undefined) {
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnDestroy() {
    this.getTokenSubscription.unsubscribe();
    this.createProductRequestStateSubscription.unsubscribe();
  }

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
