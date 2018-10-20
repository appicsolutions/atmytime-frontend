import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  message = 'Loading...';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getSomeData().subscribe(data => {
      this.message = data.message;
    });
  }

}
