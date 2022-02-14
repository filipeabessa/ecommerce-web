import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarModel } from '../../models/snackbar.model';

@Component({
  selector: 'app-alert-snackbar',
  templateUrl: './alert-snackbar.component.html',
  styleUrls: ['./alert-snackbar.component.scss'],
})
export class AlertSnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarModel) {}

  get icon(): string | void {
    switch (this.data.type) {
      case 'success':
        return 'done';
        break;
      case 'error':
        return 'error';
        break;
      case 'warn':
        return 'warning';
        break;
      case 'info':
        return 'info';
        break;
    }
  }
}
