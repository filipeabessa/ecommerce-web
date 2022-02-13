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
  checkForToken,
  notFoundToken,
  defineTokenPerLocal,
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
    token: token,
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
  })),
  on(checkForToken, (state) => ({
    ...state,
  })),
  on(defineTokenPerLocal, (state, { token }) => ({
    ...state,
    token: token,
  })),
  on(notFoundToken, (state) => ({
    ...state,
  }))
);
export const getAuthState = createFeatureSelector<AuthState>('auth');
export const getToken = createSelector(
  getAuthState,
  (state: AuthState) => state.token
);
export const getSignInRequestState = createSelector(
  getAuthState,
  (state: AuthState) => state.requests.signIn
);
export const getLogOutRequestState = createSelector(
  getAuthState,
  (state: AuthState) => state.requests.logOut
);

export function reducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return authReducer(state, action);
}
