import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MyData {
  message: string;
  success: boolean;
}

interface IsLoggedIn {
  status: boolean;
}

interface LogoutStatus {
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<MyData>('/api/v1/database.php');
  }

  isLoggedIn(): Observable<IsLoggedIn> {
    return this.http.get<IsLoggedIn>('/api/v1/isLoggedIn.php');
  }

  logout() {
    return this.http.get<LogoutStatus>('/api/v1/logout.php');
  }
}
