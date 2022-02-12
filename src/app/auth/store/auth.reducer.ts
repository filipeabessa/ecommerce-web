import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  signInRequest,
  signInSuccess,
  signInError,
  logoutSuccess,
  logoutRequest,
} from './auth.actions';
import {
  RequestState,
  NotAskedRequest,
  SuccessfulRequest,
  FailedRequest,
  InProgressRequest,
} from '../../models/request-state.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  token: string | null;
  requests: {
    signIn: RequestState;
    logOut: RequestState;
  };
}

const initialState: AuthState = {
  token: null,
  requests: {
    signIn: new NotAskedRequest(),
    logOut: new NotAskedRequest(),
  },
};

export const authReducer = createReducer(
  initialState,
  on(signInRequest, (state) => ({
    ...state,
    token: null,
    requests: {
      ...state.requests,
      signIn: new InProgressRequest(),
    },
  })),
  on(signInSuccess, (state, { token }) => ({
    ...state,
    token,
    requests: {
      ...state.requests,
      signIn: new SuccessfulRequest(),
    },
  })),
  on(signInError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      signIn: new FailedRequest(httpError),
    },
  })),
  on(logoutRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      logOut: new InProgressRequest(),
    },
  })),
  on(logoutSuccess, (state) => ({
    ...state,
    credentials: null,
    userData: null,
    requests: {
      ...state.requests,
      logOut: new SuccessfulRequest(),
    },
  }))
);

export function reducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return authReducer(state, action);
}
