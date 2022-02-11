export interface Product {
  id?: number;
  title?: string;
  price?: number;
  creation?: Date;
  content?: string;
}
export interface ProductEditParams {
  title?: string;
  content?: string;
  price?: number;
}
