import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInModel } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = `${environment.authURL}`;
  headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic RmxsTUV6VllMM2diTEZFbVdmdFZjeG9PVlVmVzlvRTh4Q3hVb3JOcDpQMFRBSGQ0d3ZaSlhuRFBKV0pvQzM3dlViNFkwbmpNdnJ3UUpvMXlvQ1ZVS1gzTVR5RzVxSXZVTkVEeWVVSVkwYzR5Q2ZWZ2p1dUZ0dVZsaHJzREFaejJGSjFqNXY0ZW84d1BBVElTcEk3QWFLREFaamtVVkhtYzEwNGdTcmdBWg==',
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
