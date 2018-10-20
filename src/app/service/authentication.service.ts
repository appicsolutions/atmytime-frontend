import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/throw';
// import 'rxjs/add/operator/catch';

import { AlertService } from './alert.service';

interface MyData {
  success: boolean;
  message: string;
}

@Injectable()
export class AuthenticationService {

  private currentUserUrl = '/api/v1/user/current-user/';
  private userDetialsUrl = '/api/v1/auth.php';
  private loginUrl = '/api/v1/user/login/';
  private logoutUrl = '/api/v1/user/logout';
  private loggedInStatus = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  // login(username: string, password: string) {
  //   const user = {
  //     username: 'test',
  //     password: 'test',
  //     token: false
  //   };
  //   if (username === user.username && password === user.password) {
  //     localStorage.setItem('currentUser', JSON.stringify(user));
  //     user['token'] = true;
  //     return user;
  //   } else {
  //     return { error: { message: 'Username or password is incorrect' } };
  //   }
  // }

  logout() {
    localStorage.removeItem('currentUser');
  }

  // getCurrentUser() {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.get(this.currentUserUrl, { headers: headers })
  //     .map(this.handleUser.bind(this))
  //     .catch(this.handleError.bind(this));
  // }

  getUserDetails(username, password) {
    return this.http.post<MyData>(this.userDetialsUrl, { username, password });
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  setLoggedIn(value: boolean) {
    localStorage.setItem('loggedIn', 'true');
    this.loggedInStatus = value;
  }

  // private handleUser(response: Response) {
  //   this.currentUser = response.json();
  //   this.loggedInStatus = true;
  //   return this.currentUser;
  // }

  // private handleError(error: any) {
  //   this.alertService.error(error.message);
  //   return Observable.throw(error);
  // }
}
