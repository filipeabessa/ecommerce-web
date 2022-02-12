import { ProductService } from './api/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../store/app.effects';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListContainerComponent } from './containers/products-list-container/products-list-container.component';
import { ProductDetailCardComponent } from './components/product-detail-card/product-detail-card.component';
import { ProductDetailContainerComponent } from './containers/product-detail-container/product-detail-container.component';
import { ProductEditCardComponent } from './components/product-edit-card/product-edit-card.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListContainerComponent,
    ProductDetailCardComponent,
    ProductDetailContainerComponent,
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
    StoreModule.forRoot({
      app: AppReducer,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  exports: [
    ProductCardComponent,
    ProductsListContainerComponent,
    ProductDetailCardComponent,
    ProductDetailContainerComponent,
  ],
  providers: [ProductService],
})
export class ProductModule {}
