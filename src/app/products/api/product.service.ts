import { Observable } from 'rxjs';
import { Product } from './../../../types/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ProductsQueryParams {
  price: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:8000/api/v1';

  constructor(private httpClient: HttpClient) {}

  getProducts({ price, name }: ProductsQueryParams): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`, {
      params: {
        price,
        name,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  retrieveProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers':
          'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      },
      withCredentials: true,
    });
  }
}
