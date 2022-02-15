import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signInRequest } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.reducer';

@Component({
  selector: 'app-signin-container',
  templateUrl: './signin-container.component.html',
  styleUrls: ['./signin-container.component.scss'],
})
export class SigninContainerComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authStore: Store<AuthState>) {}

  onSignIn() {
    const signInParams = this.signInForm.value;
    this.authStore.dispatch(signInRequest(signInParams));
  }

  ngOnInit(): void {}
}
