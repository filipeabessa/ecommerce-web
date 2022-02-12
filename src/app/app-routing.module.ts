import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailContainerComponent } from './products/containers/product-detail-container/product-detail-container.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { PageNotFoundContainerComponent } from './shared/containers/page-not-found-container/page-not-found-container.component';
import { SigninContainerComponent } from './auth/containers/signin-container/signin-container.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  { path: 'signin', component: SigninContainerComponent },
  { path: 'products/:id', component: ProductDetailContainerComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
