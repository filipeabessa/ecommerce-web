import { NgModule } from '@angular/core';

import { SigninContainerComponent } from './containers/signin-container/signin-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import { AuthService } from './api/auth.service';
import { AuthEffects } from './store/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SigninContainerComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [SigninContainerComponent],
  providers: [AuthService],
})
export class AuthModule {}
