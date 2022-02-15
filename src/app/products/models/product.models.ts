export interface CreateProductParams {
  title: string;
  price: number;
  content: string;
  token: string | null;
}
export interface EditProductParams {
  title: string;
  price: number;
  content: string;
}
export interface EditProductRequestParams {
  id: number;
  token: string | null;
  editParams: EditProductParams;
}
export interface GetProductsParams {
  price?: number;
  title?: string;
  token?: string | null;
}
export interface RetrieveProductParams {
  id: number;
  token: string | null;
}
export interface DeleteProductParams {
  id: number;
  token: string | null;
}
export interface ProductModel {
  id?: number;
  title?: string;
  price?: number;
  creation?: string;
  content?: string;
  responsible?: number;
}
