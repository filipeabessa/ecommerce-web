import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailCardComponent } from './product-detail-card/product-detail-card.component';
import { ProductDetailLayoutComponent } from './layouts/product-detail-layout/product-detail-layout.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListComponent,
    ProductDetailCardComponent,
    ProductDetailLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    ProductCardComponent,
    ProductsListComponent,
    ProductDetailCardComponent,
    ProductDetailLayoutComponent,
  ],
})
export class ProductModule {}
