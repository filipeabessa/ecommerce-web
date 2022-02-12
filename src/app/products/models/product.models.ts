export interface ProductEditParams {
  title: string;
  price: number;
  content: string;
}
export interface ProductModel {
  id?: number;
  title?: string;
  price?: number;
  creation?: string;
  content?: string;
  responsible?: number;
}
