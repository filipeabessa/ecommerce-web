export interface SignInModel {
  username: string;
  password: string;
}

export interface Credentials {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}
