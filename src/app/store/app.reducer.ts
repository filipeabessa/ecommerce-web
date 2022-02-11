import { Product } from 'src/types';
import {
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
} from './app.actions';
import {
  FailedRequest,
  InProgressRequest,
  NotAskedRequest,
  RequestState,
  SuccessfulRequest,
} from '../models/request-state.model';

export interface AppState {
  products: Product[];
  product: Product | null;
  requests: {
    retrieveProduct: RequestState;
    getProducts: RequestState;
    editProduct: RequestState;
    deleteProduct: RequestState;
  };
}

const initialState: AppState = {
  product: null,
  products: [],
  requests: {
    retrieveProduct: new NotAskedRequest(),
    getProducts: new NotAskedRequest(),
    editProduct: new NotAskedRequest(),
    deleteProduct: new NotAskedRequest(),
  },
};

const _appReducer = createReducer(
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
export function AppReducer(state: any, action: any) {
  return _appReducer(state, action);
}

export const getAppState = createFeatureSelector<AppState>('app');
export const retrieveProduct = createSelector(
  getAppState,
  (state: AppState) => state.product
);
export const retrieveProductRequestState = createSelector(
  getAppState,
  (state: AppState) => state.requests.retrieveProduct
);
export const getProducts = createSelector(
  getAppState,
  (state: AppState) => state.products
);
export const getProductsRequestState = createSelector(
  getAppState,
  (state: AppState) => state.requests.getProducts
);
export const editProductRequestState = createSelector(
  getAppState,
  (state: AppState) => state.requests.editProduct
);
export const deleteProductRequestState = createSelector(
  getAppState,
  (state: AppState) => state.requests.deleteProduct
);
