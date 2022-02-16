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
  isAuthenticated: boolean;
  requests: {
    signInRequestState: RequestState;
    logOutRequestState: RequestState;
  };
}

const initialState: AuthState = {
  token: '',
  isAuthenticated: false,
  requests: {
    signInRequestState: new NotAskedRequest(),
    logOutRequestState: new NotAskedRequest(),
  },
};

export const authReducer = createReducer(
  initialState,
  on(signInRequest, (state) => ({
    ...state,
    token: null,
    requests: {
      ...state.requests,
      signInRequestState: new InProgressRequest(),
    },
  })),
  on(signInSuccess, (state, { token }) => ({
    ...state,
    token: token,
    isAuthenticated: true,
    requests: {
      ...state.requests,
      signInRequestState: new SuccessfulRequest(),
    },
  })),
  on(signInError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      signInRequestState: new FailedRequest(httpError),
    },
  })),
  on(logoutRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      logOutRequestState: new InProgressRequest(),
    },
  })),
  on(logoutSuccess, (state) => ({
    ...state,
    token: null,
    isAuthenticated: false,
    requests: {
      ...state.requests,
      logOutRequestState: new SuccessfulRequest(),
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
export const isUserAuthenticated = createSelector(
  getAuthState,
  (state) => state.isAuthenticated
);
export const getToken = createSelector(
  getAuthState,
  (state: AuthState) => state.token
);
export const getSignInRequestState = createSelector(
  getAuthState,
  (state: AuthState) => state.requests.signInRequestState
);
export const getLogOutRequestState = createSelector(
  getAuthState,
  (state: AuthState) => state.requests.logOutRequestState
);

export function reducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return authReducer(state, action);
}
