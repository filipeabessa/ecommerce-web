import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInModel } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = `${environment.authURL}`;
  headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic UDBUQUhkNHd2WkpYbkRQSldKb0MzN3ZVYjRZMG5qTXZyd1FKbzF5b0NWVUtYM01UeUc1cUl2VU5FRHllVUlZMGM0eUNmVmdqdXVGdHVWbGhyc0RBWnoyRkoxajV2NGVvOHdQQVRJU3BJN0FhS0RBWmprVVZIbWMxMDRnU3JnQVo=',
  });

  constructor(private httpClient: HttpClient) {}

  signIn(signIn: SignInModel): Observable<any> {
    return this.httpClient.post(
      `${this.authUrl}`,
      `grant_type=password&username=${signIn.username}&password=${signIn.password}`,
      { headers: this.headers }
    );
  }
}
