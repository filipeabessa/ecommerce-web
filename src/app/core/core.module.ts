import { AlertsService } from './services/alerts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertSnackbarComponent } from './components/alert-snackbar/alert-snackbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AlertSnackbarComponent],
  imports: [CommonModule, MatIconModule, MatSnackBarModule],
  exports: [AlertSnackbarComponent],
  providers: [AlertsService],
})
export class CoreModule {}
