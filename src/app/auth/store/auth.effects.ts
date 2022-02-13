import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from './../api/auth.service';
import {
  signInRequest,
  signInError,
  signInSuccess,
  notFoundToken,
  defineTokenPerLocal,
  logoutRequest,
  logoutSuccess,
  checkForToken,
} from './auth.actions';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  signInRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInRequest),
      exhaustMap((action) =>
        this.authService.signIn(action).pipe(
          map((credentials) => {
            localStorage.setItem('token', credentials.access_token);
            this.router.navigate(['/products']);

            return signInSuccess({ token: credentials.access_token });
          }),
          catchError((error) => {
            this.router.navigate(['/404']);
            return of(signInError({ httpError: error }));
          })
        )
      )
    )
  );

  onCheckForToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkForToken),
      exhaustMap(async () => {
        const token = localStorage.getItem('token');
        if (token) {
          return defineTokenPerLocal({ token: token });
        } else {
          return notFoundToken();
        }
      })
    )
  );

  onLogout = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutRequest),
      exhaustMap(async () => {
        localStorage.removeItem('token');
        return logoutSuccess();
      })
    )
  );
}
