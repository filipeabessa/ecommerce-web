import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailCardComponent } from './product-detail-card/product-detail-card.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListComponent,
    ProductDetailCardComponent,
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule],
  exports: [
    ProductCardComponent,
    ProductsListComponent,
    ProductDetailCardComponent,
  ],
})
export class ProductModule {}
