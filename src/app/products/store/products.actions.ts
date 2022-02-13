import {
  GetProductsParams,
  ProductEditParams,
  ProductModel,
  RetrieveProductParams,
} from '../models/product.models';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

const PREFIX = '[PRODUCTS]';

export const retrieveProductRequest = createAction(
  `${PREFIX} Retrieve Product`,
  props<RetrieveProductParams>()
);
export const retrieveProductSuccess = createAction(
  `${PREFIX} Set Product Success`,
  props<{ product: ProductModel }>()
);
export const retrieveProductError = createAction(
  `${PREFIX} Set Product Error`,
  props<{ httpError: HttpErrorResponse }>()
);

export const getProductsRequest = createAction(
  `${PREFIX} Get Products`,
  props<GetProductsParams>()
);
export const getProductsSuccess = createAction(
  `${PREFIX} Set Products Success`,
  props<{ products: ProductModel[] }>()
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
  props<{ product: ProductModel }>()
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
