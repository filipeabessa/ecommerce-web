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

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router
  ) {}
  createProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProductRequest),
      exhaustMap((createProductParams: CreateProductParams) =>
        this.productService.createProduct(createProductParams).pipe(
          map((product) => createProductSuccess(product)),
          catchError((error) => {
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
              this.router.navigate(['/404']);
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
          catchError((error) => of(getProductsError({ httpError: error })))
        )
      )
    )
  );

  editProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editProductRequest),
      exhaustMap((action: any) =>
        this.productService.editProduct(action.id, action.editParams).pipe(
          map((product) =>
            editProductSuccess({
              product: product,
            })
          ),
          catchError((error) => of(editProductError({ httpError: error })))
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
          catchError((error) => of(deleteProductError({ httpError: error })))
        )
      )
    )
  );
}
