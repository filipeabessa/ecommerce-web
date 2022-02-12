import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailLayoutComponent } from './products/layouts/product-detail-layout/product-detail-layout.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { PagNotFoundComponent } from './shared/pag-not-found/pag-not-found.component';
import { SigninContainerComponent } from './auth/signin-container/signin-container.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  { path: 'signin', component: SigninContainerComponent },
  { path: 'products/:id', component: ProductDetailLayoutComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PagNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
