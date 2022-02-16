const baseURL = 'https://fbessa-products-management-api.herokuapp.com/';

export const environment = {
  production: true,
  authURL: `${baseURL} + 'o/token/'`,
  apiURL: `${baseURL} + 'api/v1'`,
};
