import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  submitted: boolean = false

  constructor(
    private router : Router,
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    })
  }

  onSubmit() {
    this.submitted = true;
    this.auth.logIn();
    this.router.navigate(['employees']);
  }

}
