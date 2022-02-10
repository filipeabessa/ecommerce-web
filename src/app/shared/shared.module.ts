import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';

@NgModule({
  declarations: [NavbarComponent, PagNotFoundComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  exports: [NavbarComponent, PagNotFoundComponent],
})
export class SharedModule {}
