import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInModel } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = `${environment.authentication}`;
  headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic TkYxWlZ0OXJqQnlra2s5ZnBGMEh1QmgzcHU2ZjJXRFhLSWdYazhDazpPbmRKV1lqYlc0a2tsQzdibW5mSDRLU1E2NkNjU2lOSDZyRUhHcTZ6cXQ4R0lLRU92cUZrdGdmNUpNQ2I3R2VZUFkycGQ4STBNeFhjb1RtdzhSZnpQVXkxYmlNMldzS3BhWHBtaTNqczF1ZWhnWlI1T1RrdGt4TDdBV1hRNlV4dQ==',
  });

  constructor(private httpClient: HttpClient) {}

  signIn(signIn: SignInModel): Observable<any> {
    return this.httpClient.post(
      `${this.apiUrl}/o/token/`,
      `grant_type=password&username=${signIn.username}&password=${signIn.password}`,
      { headers: this.headers }
    );
  }
}
