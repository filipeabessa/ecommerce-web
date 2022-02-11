import { ProductEditParams } from '../../types/index';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Product } from 'src/types';

const PREFIX = '[Product]';

export const retrieveProductRequest = createAction(
  `${PREFIX} Retrieve Product`,
  props<{ id: number }>()
);
export const retrieveProductSuccess = createAction(
  `${PREFIX} Set Product Success`,
  props<{ product: Product }>()
);
export const retrieveProductError = createAction(
  `${PREFIX} Set Product Error`,
  props<{ httpError: HttpErrorResponse }>()
);

export const getProductsRequest = createAction(
  `${PREFIX} Get Products`,
  props<{ price?: number; content?: string }>()
);
export const getProductsSuccess = createAction(
  `${PREFIX} Set Products Success`,
  props<{ products: Product[] }>()
);
export const getProductsError = createAction(
  `${PREFIX} Set Products Error`,
  props<{ httpError: HttpErrorResponse }>()
);

export const editProductRequest = createAction(
  `${PREFIX} Edit Product`,
  props<{ id: number; editParams: ProductEditParams }>()
);
export const editProductSuccess = createAction(
  `${PREFIX} Edit Product Success`,
  props<{ product: Product }>()
);
export const editProductError = createAction(
  `${PREFIX} Edit Product Error`,
  props<{ httpError: HttpErrorResponse }>()
);
export const deleteProductRequest = createAction(
  `${PREFIX} Delete Product`,
  props<{ id: number }>()
);
export const deleteProductSuccess = createAction(
  `${PREFIX} Delete Product Success`
);
export const deleteProductError = createAction(
  `${PREFIX} Delete Product Error`,
  props<{ httpError: HttpErrorResponse }>()
);
