import { EditProductRequestParams } from './../models/product.models';
import { ProductService } from '../api/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  retrieveProductError,
  retrieveProductRequest,
  retrieveProductSuccess,
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
  editProductRequest,
  editProductSuccess,
  editProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  createProductRequest,
  createProductSuccess,
  createProductError,
} from './products.actions';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  CreateProductParams,
  DeleteProductParams,
  GetProductsParams,
  RetrieveProductParams,
} from '../models/product.models';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router,
    private alertsService: AlertsService
  ) {}
  createProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProductRequest),
      exhaustMap((createProductParams: CreateProductParams) =>
        this.productService.createProduct(createProductParams).pipe(
          map((product) => {
            this.alertsService.successSnackbar('Produto criado com sucesso');
            this.router.navigate(['/products']);
            return createProductSuccess(product);
          }),
          catchError((error) => {
            if (error.status === 401) {
              this.alertsService.errorSnackbar('Usuário não autenticado');
            }
            return of(createProductError({ httpError: error }));
          })
        )
      )
    )
  );
  retrieveProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(retrieveProductRequest),
      exhaustMap((retrieveProductParams: RetrieveProductParams) =>
        this.productService
          .retrieveProduct({
            id: retrieveProductParams.id,
            token: retrieveProductParams.token,
          })
          .pipe(
            map((product) =>
              retrieveProductSuccess({
                product: product,
              })
            ),
            catchError((error) => {
              if (error.status === 401) {
                this.alertsService.errorSnackbar('Usuário não autorizado');
              }
              return of(retrieveProductError({ httpError: error }));
            })
          )
      )
    )
  );

  getProductsRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProductsRequest),
      exhaustMap((action: GetProductsParams) =>
        this.productService.getProducts(action).pipe(
          map((products) =>
            getProductsSuccess({
              products: products,
            })
          ),
          catchError((error) => {
            if (error.status === 401) {
              this.alertsService.errorSnackbar('Usuário não autorizado');
            }
            return of(getProductsError({ httpError: error }));
          })
        )
      )
    )
  );

  editProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editProductRequest),
      exhaustMap((editProducRequestParams: EditProductRequestParams) =>
        this.productService.editProduct(editProducRequestParams).pipe(
          map((product) => {
            this.alertsService.successSnackbar('Produto editado com sucesso');
            this.router.navigate(['/products']);
            return editProductSuccess({
              product: product,
            });
          }),
          catchError((error) => {
            if (error.status === 401) {
              this.alertsService.errorSnackbar('Usuário não autenticado');
            }
            return of(editProductError({ httpError: error }));
          })
        )
      )
    )
  );

  deleteProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProductRequest),
      exhaustMap((deleteProductParams: DeleteProductParams) =>
        this.productService.deleteProduct(deleteProductParams).pipe(
          map((product) => {
            this.router.navigate(['/products']);
            return deleteProductSuccess();
          }),
          catchError((error) => {
            if (error.status === 401) {
              this.alertsService.errorSnackbar('Usuário não autenticado');
            }
            return of(deleteProductError({ httpError: error }));
          })
        )
      )
    )
  );
}
