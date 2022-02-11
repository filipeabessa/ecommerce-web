export interface Product {
  id?: number;
  title?: string;
  price?: number;
  creation?: string;
  content?: string;
  responsible?: number;
}
export interface ProductEditParams {
  title?: string;
  content?: string;
  price?: number;
}
