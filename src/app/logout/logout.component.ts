import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.userService.logout().subscribe(data => {
      if (data.status) {
        this.router.navigate(['login']);
        this.auth.setLoggedIn(false);
      } else {
        console.error('Error logging out!');
      }
    });
  }

}
