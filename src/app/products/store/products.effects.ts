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
} from './products.actions';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
  retrieveProductRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(retrieveProductRequest),
      exhaustMap((action: any) =>
        this.productService.retrieveProduct(action.id).pipe(
          map((product) =>
            retrieveProductSuccess({
              product: product,
            })
          ),
          catchError((error) => of(retrieveProductError({ httpError: error })))
        )
      )
    )
  );

  getProductsRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProductsRequest),
      exhaustMap((action: any) =>
        this.productService.getProducts(action.params).pipe(
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
      exhaustMap((action: any) =>
        this.productService.deleteProduct(action.id).pipe(
          map((product) => deleteProductSuccess()),
          catchError((error) => of(deleteProductError({ httpError: error })))
        )
      )
    )
  );
}
