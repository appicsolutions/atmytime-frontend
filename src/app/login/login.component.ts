import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: String;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  login() {

    this.authenticationService.getUserDetails(
      this.f.username.value,
      this.f.password.value
    ).subscribe(data => {
      console.log(data.success);
      if (data.success) {
        this.router.navigate([this.returnUrl]);
        this.authenticationService.setLoggedIn(true);
      } else {
        this.alertService.error(data.message);
        this.authenticationService.setLoggedIn(false);
      }
    });

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

  }

}
