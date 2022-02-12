import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface ProductsQueryParams {
  price?: number;
  title?: string;
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

  getProducts(productParams: ProductsQueryParams): Observable<ProductModel[]> {
    let params = new HttpParams();
    if (productParams?.price !== undefined) {
      params.set('price', productParams.price.toString());
    }
    if (productParams?.title !== undefined) {
      params.set('title', productParams.title.toString());
    }

    return this.httpClient.get<ProductModel[]>(`${this.apiUrl}/products`, {
      params,
    });
  }

  retrieveProduct(id: number): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(
      `${this.apiUrl}/products/${id}/`,
      {}
    );
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
