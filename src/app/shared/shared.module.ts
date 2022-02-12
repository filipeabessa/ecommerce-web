import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundContainerComponent } from './containers/page-not-found-container/page-not-found-container.component';

@NgModule({
  declarations: [NavbarComponent, PageNotFoundContainerComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  exports: [NavbarComponent, PageNotFoundContainerComponent],
})
export class SharedModule {}
