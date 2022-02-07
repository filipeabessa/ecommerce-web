import { ProductDetailCardComponent } from './products/product-detail-card/product-detail-card.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'product', component: ProductDetailCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
