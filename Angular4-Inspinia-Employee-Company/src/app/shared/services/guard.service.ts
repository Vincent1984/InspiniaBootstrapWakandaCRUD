import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

// prevent non connected users to access the app
@Injectable()
export class AppGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.checkCredentials().then(result => {
      if(result) {
        if(state.url === "/login" || state.url === "/register") {
          this.router.navigate(['/mainView']);
        } else {
          return true;
        }
      } else {
        this.router.navigate(['/login']);
      }
    }).catch((errorMessage) => {
      let url = state.url;
      if(url === "/login") {
        return true;
      } else if(url === "/register") {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
