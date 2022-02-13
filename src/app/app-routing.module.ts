import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailContainerComponent } from './products/containers/product-detail-container/product-detail-container.component';
import { ProductsListContainerComponent } from './products/containers/products-list-container/products-list-container.component';
import { PageNotFoundContainerComponent } from './shared/containers/page-not-found-container/page-not-found-container.component';
import { SigninContainerComponent } from './auth/containers/signin-container/signin-container.component';
import { CreateProductContainerComponent } from './products/containers/create-product-container/create-product-container.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListContainerComponent,
  },
  { path: 'signin', component: SigninContainerComponent },
  { path: 'createproduct', component: CreateProductContainerComponent },
  { path: 'products/:id', component: ProductDetailContainerComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
