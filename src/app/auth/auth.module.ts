import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { SigninContainerComponent } from './signin-container/signin-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import { AuthService } from './api/auth.service';

@NgModule({
  declarations: [SigninContainerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
    // StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers, {
    //   metaReducers: fromAuth.metaReducers,
    // }),
  ],
  exports: [SigninContainerComponent],
  providers: [AuthService],
})
export class AuthModule {}
