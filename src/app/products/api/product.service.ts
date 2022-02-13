import { Observable } from 'rxjs';
import {
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
  apiUrl = `${environment.API}`;

  constructor(private httpClient: HttpClient) {}

  getProducts(getProductParams: GetProductsParams): Observable<ProductModel[]> {
    let params = new HttpParams();
    if (getProductParams?.price !== undefined) {
      params.set('price', getProductParams.price.toString());
    }
    if (getProductParams?.title !== undefined) {
      params.set('title', getProductParams.title.toString());
    }

    return this.httpClient.get<ProductModel[]>(`${this.apiUrl}/products`, {
      params,
      headers: { Authorization: `Bearer ${getProductParams.token}` },
    });
  }

  retrieveProduct({
    id,
    token,
  }: RetrieveProductParams): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(`${this.apiUrl}/products/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  editProduct(
    id: number,
    editParams: ProductEditParams
  ): Observable<ProductModel> {
    return this.httpClient.patch<ProductModel>(
      `${this.apiUrl}/products/${id}/`,
      editParams
    );
  }

  deleteProduct(id: number): Observable<ProductModel> {
    return this.httpClient.delete<ProductModel>(
      `${this.apiUrl}/products/${id}/`,
      {}
    );
  }
}
