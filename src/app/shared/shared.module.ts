import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundContainerComponent } from './containers/page-not-found-container/page-not-found-container.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, PageNotFoundContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    PageNotFoundContainerComponent,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class SharedModule {}
