import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { SignInModel } from '../models/auth.models';

const PREFIX = '[AUTH]';

export const signInRequest = createAction(
  `${PREFIX} SIGNIN REQUEST`,
  props<SignInModel>()
);
export const signInSuccess = createAction(
  `${PREFIX} SIGNIN SUCCESS`,
  props<{ token: string }>()
);
export const signInError = createAction(
  `${PREFIX} SIGNIN ERROR`,
  props<{ httpError: HttpErrorResponse }>()
);
export const checkForToken = createAction(`${PREFIX} CHECK FOR TOKEN`);
export const defineTokenPerLocal = createAction(
  `${PREFIX} DEFINE TOKEN PER LOCAL`,
  props<{ token: string }>()
);
export const notFoundToken = createAction(`${PREFIX} NOT FOUND TOKEN`);
export const logoutRequest = createAction(`${PREFIX} LOGOUT REQUEST`);
export const logoutSuccess = createAction(`${PREFIX} LOGOUT SUCCESS`);
