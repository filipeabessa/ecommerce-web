import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  onSignIn() {
    console.log(this.signInForm.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
