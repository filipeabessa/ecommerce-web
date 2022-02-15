import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  AuthState,
  isUserAuthenticated,
} from 'src/app/auth/store/auth.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(public router: Router, private authStore: Store<AuthState>) {}

  isAuthenticated$: Observable<Boolean>;
  isAuthenticated: Boolean = false;
  isUserAuthenticatedSubscription: Subscription;

  ngOnInit(): void {
    this.isAuthenticated$ = this.authStore.pipe(select(isUserAuthenticated));
    this.isUserAuthenticatedSubscription = this.isAuthenticated$.subscribe(
      (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      }
    );
  }

  ngOnDestroy(): void {
    this.isUserAuthenticatedSubscription.unsubscribe();
  }
}
