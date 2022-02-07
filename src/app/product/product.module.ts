import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [ProductCardComponent, ProductsListComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [ProductCardComponent],
})
export class ProductModule {}
