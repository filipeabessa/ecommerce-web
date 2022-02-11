import { Observable } from 'rxjs';
import { Product } from './../../../types/index';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  apiUrl = 'http://localhost:8000/api/v1';

  constructor(private httpClient: HttpClient) {}

  getProducts(productParams: ProductsQueryParams): Observable<Product[]> {
    let params = new HttpParams();
    if (productParams?.price !== undefined) {
      params.set('price', productParams.price.toString());
    }
    if (productParams?.title !== undefined) {
      params.set('title', productParams.title.toString());
    }

    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`, {
      params,
    });
  }

  retrieveProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}/`, {});
  }

  editProduct(id: number, editParams: ProductEditParams): Observable<Product> {
    return this.httpClient.patch<Product>(
      `${this.apiUrl}/products/${id}/`,
      editParams
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(
      `${this.apiUrl}/products/${id}/`,
      {}
    );
  }
}
