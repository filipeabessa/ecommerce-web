import { SnackBarModel } from '../models/snackbar.model';
import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AlertSnackbarComponent } from './../components/alert-snackbar/alert-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) {}

  successSnackbar(message: string): void {
    this.openSnackBar(message, 'success');
  }

  errorSnackbar(message: string): void {
    this.openSnackBar(message, 'error');
  }

  warnSnackbar(message: string): void {
    this.openSnackBar(message, 'warn');
  }

  infoSnackbar(message: string): void {
    this.openSnackBar(message, 'info');
  }

  serverErrorSnackbar(): void {
    this.openSnackBar('Ocorreu um erro inesperado!', 'error');
  }

  private openSnackBar(message: string, type: string): void {
    this._snackBar.openFromComponent(AlertSnackbarComponent, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: new SnackBarModel(message, type),
      panelClass: `${type}-snackbar`,
    });
  }
}
