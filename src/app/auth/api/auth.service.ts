import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInModel } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = environment.authURL;
  authorizationHeader = environment.authAuthorizationHeader;

  headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: this.authorizationHeader,
  });

  constructor(private httpClient: HttpClient) {}

  signIn(signIn: SignInModel): Observable<any> {
    return this.httpClient.post(
      this.authURL,
      `grant_type=password&username=${signIn.username}&password=${signIn.password}`,
      { headers: this.headers }
    );
  }
}
