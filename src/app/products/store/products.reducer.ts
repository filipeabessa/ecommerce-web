import { Product } from 'src/types';
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  deleteProductRequest,
  deleteProductError,
  deleteProductSuccess,
  editProductRequest,
  editProductError,
  editProductSuccess,
  getProductsRequest,
  getProductsError,
  getProductsSuccess,
  retrieveProductRequest,
  retrieveProductError,
  retrieveProductSuccess,
} from './products.actions';
import {
  FailedRequest,
  InProgressRequest,
  NotAskedRequest,
  RequestState,
  SuccessfulRequest,
} from '../../models/request-state.model';

export const ProductsReducerFeatureKey = 'products';

export interface ProductsState {
  products: Product[];
  product: Product | null;
  requests: {
    retrieveProduct: RequestState;
    getProducts: RequestState;
    editProduct: RequestState;
    deleteProduct: RequestState;
  };
}

const initialState: ProductsState = {
  product: null,
  products: [],
  requests: {
    retrieveProduct: new NotAskedRequest(),
    getProducts: new NotAskedRequest(),
    editProduct: new NotAskedRequest(),
    deleteProduct: new NotAskedRequest(),
  },
};

const productsReducer = createReducer(
  initialState,
  on(retrieveProductRequest, (state) => ({
    ...state,
    product: null,
    requests: {
      ...state.requests,
      retrieveProduct: new InProgressRequest(),
    },
  })),
  on(retrieveProductSuccess, (state, { product }) => ({
    ...state,
    product: product,
    requests: {
      ...state.requests,
      retrieveProduct: new SuccessfulRequest(),
    },
  })),
  on(retrieveProductError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      retrieveProduct: new FailedRequest(httpError),
    },
  })),
  on(getProductsRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      getProducts: new InProgressRequest(),
    },
  })),
  on(getProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    requests: {
      ...state.requests,
      getProducts: new SuccessfulRequest(),
    },
  })),
  on(getProductsError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      getProducts: new FailedRequest(httpError),
    },
  })),
  on(editProductRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      editProduct: new InProgressRequest(),
    },
  })),
  on(editProductSuccess, (state, { product }) => ({
    ...state,
    product: product,
    requests: {
      ...state.requests,
      editProduct: new SuccessfulRequest(),
    },
  })),
  on(editProductError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      editProduct: new FailedRequest(httpError),
    },
  })),
  on(deleteProductRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      deleteProduct: new InProgressRequest(),
    },
  })),
  on(deleteProductSuccess, (state) => ({
    ...state,
    product: null,
    requests: {
      ...state.requests,
      deleteProduct: new SuccessfulRequest(),
    },
  })),
  on(deleteProductError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      deleteProduct: new FailedRequest(httpError),
    },
  }))
);

export const getProductsState =
  createFeatureSelector<ProductsState>('Products');
export const retrieveProduct = createSelector(
  getProductsState,
  (state: ProductsState) => state.product
);
export const retrieveProductRequestState = createSelector(
  getProductsState,
  (state: ProductsState) => state.requests.retrieveProduct
);
export const getProducts = createSelector(
  getProductsState,
  (state: ProductsState) => state.products
);
export const getProductsRequestState = createSelector(
  getProductsState,
  (state: ProductsState) => state.requests.getProducts
);
export const editProductRequestState = createSelector(
  getProductsState,
  (state: ProductsState) => state.requests.editProduct
);
export const deleteProductRequestState = createSelector(
  getProductsState,
  (state: ProductsState) => state.requests.deleteProduct
);

export function reducer(
  state: ProductsState | undefined,
  action: Action
): ProductsState {
  return productsReducer(state, action);
}
