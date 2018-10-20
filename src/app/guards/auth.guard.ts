import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    return this.userService.isLoggedIn().pipe(map(res => {
      if (res.status) {
        this.authService.setLoggedIn(true);
        return true;
      } else {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
    }));
  }
}
