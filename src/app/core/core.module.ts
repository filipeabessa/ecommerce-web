import { AlertsService } from './services/alerts.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AlertSnackbarComponent } from './components/alert-snackbar/alert-snackbar.component';

@NgModule({
  declarations: [AlertSnackbarComponent],
  imports: [SharedModule],
  exports: [AlertSnackbarComponent],
  providers: [AlertsService],
})
export class CoreModule {}
