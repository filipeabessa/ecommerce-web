import { ProductService } from './api/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProductsReducer from './store/products.reducer';
import { ProductsEffects } from './store/products.effects';
import * as fromAuth from '../auth/store/auth.reducer';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListContainerComponent } from './containers/products-list-container/products-list-container.component';
import { ProductDetailCardComponent } from './components/product-detail-card/product-detail-card.component';
import { ProductDetailContainerComponent } from './containers/product-detail-container/product-detail-container.component';
import { ProductEditCardComponent } from './components/product-edit-card/product-edit-card.component';
import { AuthEffects } from '../auth/store/auth.effects';
import { CreateProductContainerComponent } from './containers/create-product-container/create-product-container.component';
import { CreateProductCardComponent } from './components/create-product-card/create-product-card.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListContainerComponent,
    ProductDetailCardComponent,
    ProductDetailContainerComponent,
    ProductEditCardComponent,
    CreateProductContainerComponent,
    CreateProductCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromProductsReducer.ProductsReducerFeatureKey,
      fromProductsReducer.reducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
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
