import { EditProductRequestParams } from './../models/product.models';
import {
  DeleteProductParams,
  GetProductsParams,
  EditProductParams,
  ProductModel,
  RetrieveProductParams,
  CreateProductParams,
} from '../models/product.models';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

const PREFIX = '[PRODUCTS]';

export const createProductRequest = createAction(
  `${PREFIX} Create Product`,
  props<CreateProductParams>()
);
export const createProductSuccess = createAction(
  `${PREFIX} Create Product Success`,
  props<ProductModel>()
);
export const createProductError = createAction(
  `${PREFIX} Create Product Error`,
  props<{ httpError: HttpErrorResponse }>()
);

export const retrieveProductRequest = createAction(
  `${PREFIX} Retrieve Product`,
  props<RetrieveProductParams>()
);
export const retrieveProductSuccess = createAction(
  `${PREFIX} Retrieve Product Success`,
  props<{ product: ProductModel }>()
);
export const retrieveProductError = createAction(
  `${PREFIX} Retrieve Product Error`,
  props<{ httpError: HttpErrorResponse }>()
);

export const getProductsRequest = createAction(
  `${PREFIX} Get Products`,
  props<GetProductsParams>()
);
export const getProductsSuccess = createAction(
  `${PREFIX} Get Products Success`,
  props<{ products: ProductModel[] }>()
);
export const getProductsError = createAction(
  `${PREFIX} Get Products Error`,
  props<{ httpError: HttpErrorResponse }>()
);

export const editProductRequest = createAction(
  `${PREFIX} Edit Product`,
  props<EditProductRequestParams>()
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
  props<DeleteProductParams>()
);
export const deleteProductSuccess = createAction(
  `${PREFIX} Delete Product Success`
);
export const deleteProductError = createAction(
  `${PREFIX} Delete Product Error`,
  props<{ httpError: HttpErrorResponse }>()
);
