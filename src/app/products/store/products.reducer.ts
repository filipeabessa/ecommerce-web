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
  createProductRequest,
  createProductSuccess,
  createProductError,
} from './products.actions';
import {
  FailedRequest,
  InProgressRequest,
  NotAskedRequest,
  RequestState,
  SuccessfulRequest,
} from '../../models/request-state.model';
import { ProductModel } from '../models/product.models';

export const ProductsReducerFeatureKey = 'products';

export interface ProductsState {
  products: ProductModel[];
  product: ProductModel | null;
  requests: {
    createProductRequestState: RequestState;
    retrieveProductRequestState: RequestState;
    getProductsRequestState: RequestState;
    editProductRequestState: RequestState;
    deleteProductRequestState: RequestState;
  };
}

const initialState: ProductsState = {
  product: null,
  products: [],
  requests: {
    createProductRequestState: new NotAskedRequest(),
    retrieveProductRequestState: new NotAskedRequest(),
    getProductsRequestState: new NotAskedRequest(),
    editProductRequestState: new NotAskedRequest(),
    deleteProductRequestState: new NotAskedRequest(),
  },
};

const productsReducer = createReducer(
  initialState,
  on(createProductRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      editProductRequestState: new InProgressRequest(),
    },
  })),
  on(createProductSuccess, (state, product) => ({
    ...state,
    product: product,
    requests: {
      ...state.requests,
      editProductRequestState: new SuccessfulRequest(),
    },
  })),
  on(createProductError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      editProductRequestState: new FailedRequest(httpError),
    },
  })),
  on(retrieveProductRequest, (state) => ({
    ...state,
    product: null,
    requests: {
      ...state.requests,
      retrieveProductRequestState: new InProgressRequest(),
    },
  })),
  on(retrieveProductSuccess, (state, { product }) => ({
    ...state,
    product: product,
    requests: {
      ...state.requests,
      retrieveProductRequestState: new SuccessfulRequest(),
    },
  })),
  on(retrieveProductError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      retrieveProductRequestState: new FailedRequest(httpError),
    },
  })),
  on(getProductsRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      getProductsRequestState: new InProgressRequest(),
    },
  })),
  on(getProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    requests: {
      ...state.requests,
      getProductsRequestState: new SuccessfulRequest(),
    },
  })),
  on(getProductsError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      getProductsRequestState: new FailedRequest(httpError),
    },
  })),
  on(editProductRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      editProductRequestState: new InProgressRequest(),
    },
  })),
  on(editProductSuccess, (state, { product }) => ({
    ...state,
    product: product,
    requests: {
      ...state.requests,
      editProductRequestState: new SuccessfulRequest(),
    },
  })),
  on(editProductError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      editProductRequestState: new FailedRequest(httpError),
    },
  })),
  on(deleteProductRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      deleteProductRequestState: new InProgressRequest(),
    },
  })),
  on(deleteProductSuccess, (state) => ({
    ...state,
    product: null,
    requests: {
      ...state.requests,
      deleteProductRequestState: new SuccessfulRequest(),
    },
  })),
  on(deleteProductError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      deleteProductRequestState: new FailedRequest(httpError),
    },
  }))
);

export const getProductsState =
  createFeatureSelector<ProductsState>('products');
export const retrieveProduct = createSelector(
  getProductsState,
  (state: ProductsState) => state.product
);
export const retrieveProductRequestState = createSelector(
  getProductsState,
  (state: ProductsState) => state.requests.retrieveProductRequestState
);
export const createProductRequestState = createSelector(
  getProductsState,
  (state: ProductsState) => state.requests.createProductRequestState
);
export const getProducts = createSelector(
  getProductsState,
  (state: ProductsState) => state.products
);
export const getProductsRequestState = createSelector(
  getProductsState,
  (state: ProductsState) => state.requests.getProductsRequestState
);
export const editProductRequestState = createSelector(
  getProductsState,
  (state: ProductsState) => state.requests.editProductRequestState
);
export const deleteProductRequestState = createSelector(
  getProductsState,
  (state: ProductsState) => state.requests.deleteProductRequestState
);

export function reducer(
  state: ProductsState | undefined,
  action: Action
): ProductsState {
  return productsReducer(state, action);
}
