import { EditProductRequestParams } from './../models/product.models';
import { Observable } from 'rxjs';
import {
  CreateProductParams,
  DeleteProductParams,
  GetProductsParams,
  ProductModel,
  RetrieveProductParams,
} from '../models/product.models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface ProductsQueryParams {
  price?: number;
  title?: string;
  token?: string;
}

interface ProductEditParams {
  title?: string;
  content?: string;
  price?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = environment.apiURL;

  constructor(private httpClient: HttpClient) {}
  createProduct(
    createProductParams: CreateProductParams
  ): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>(
      `${this.apiUrl}/products/`,
      {
        title: createProductParams.title,
        content: createProductParams.content,
        price: createProductParams.price,
      },
      {
        headers: { Authorization: `Bearer ${createProductParams.token}` },
      }
    );
  }

  getProducts(getProductParams: GetProductsParams): Observable<ProductModel[]> {
    let params = new HttpParams();
    if (
      getProductParams.price !== '' &&
      getProductParams.title !== '' &&
      getProductParams.price !== undefined &&
      getProductParams.title !== undefined
    ) {
      params = params
        .append('price', getProductParams.price!.toString())
        .append('title', getProductParams.title!);
    } else if (
      getProductParams.price !== '' &&
      getProductParams.price !== undefined
    ) {
      params = params.append('price', getProductParams.price.toString());
    } else if (
      getProductParams.title !== '' &&
      getProductParams.title !== undefined
    ) {
      params = params.append('title', getProductParams.title.toString());
    }

    return this.httpClient.get<ProductModel[]>(`${this.apiUrl}/products`, {
      params: params,
      headers: { Authorization: `Bearer ${getProductParams.token}` },
    });
  }

  retrieveProduct(
    retrieveProductParams: RetrieveProductParams
  ): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(
      `${this.apiUrl}/products/${retrieveProductParams.id}/`,
      {
        headers: { Authorization: `Bearer ${retrieveProductParams.token}` },
      }
    );
  }

  editProduct(
    editProductParams: EditProductRequestParams
  ): Observable<ProductModel> {
    return this.httpClient.patch<ProductModel>(
      `${this.apiUrl}/products/${editProductParams.id}/`,
      editProductParams.editParams,
      {
        headers: { Authorization: `Bearer ${editProductParams.token}` },
      }
    );
  }

  deleteProduct(
    deleteProductParams: DeleteProductParams
  ): Observable<ProductModel> {
    return this.httpClient.delete<ProductModel>(
      `${this.apiUrl}/products/${deleteProductParams.id}/`,
      {
        headers: { Authorization: `Bearer ${deleteProductParams.token}` },
      }
    );
  }
}
