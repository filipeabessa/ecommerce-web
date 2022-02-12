import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials, SignInModel } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = `${environment.API}`;

  constructor(private httpClient: HttpClient) {}

  signIn(signIn: SignInModel): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/o/token`, signIn);
  }
}
