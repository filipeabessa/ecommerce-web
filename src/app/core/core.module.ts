import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertSnackbarComponent } from './components/alert-snackbar/alert-snackbar.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AlertSnackbarComponent],
  imports: [CommonModule, MatIconModule],
})
export class CoreModule {}
