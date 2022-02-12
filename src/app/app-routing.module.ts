import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailContainerComponent } from './products/containers/product-detail-container/product-detail-container.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { PagNotFoundComponent } from './shared/pag-not-found/pag-not-found.component';
import { SigninContainerComponent } from './auth/containers/signin-container/signin-container.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  { path: 'signin', component: SigninContainerComponent },
  { path: 'products/:id', component: ProductDetailContainerComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PagNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
