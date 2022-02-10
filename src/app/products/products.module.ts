import { ProductService } from './api/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailCardComponent } from './product-detail-card/product-detail-card.component';
import { ProductDetailLayoutComponent } from './layouts/product-detail-layout/product-detail-layout.component';
import { ProductEditCardComponent } from './product-edit-card/product-edit-card.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListComponent,
    ProductDetailCardComponent,
    ProductDetailLayoutComponent,
    ProductEditCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProductCardComponent,
    ProductsListComponent,
    ProductDetailCardComponent,
    ProductDetailLayoutComponent,
  ],
  providers: [ProductService],
})
export class ProductModule {}
