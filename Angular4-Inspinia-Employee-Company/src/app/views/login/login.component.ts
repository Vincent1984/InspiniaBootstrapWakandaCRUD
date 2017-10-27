import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../../shared/services'

@Component({
    selector: 'login',
    templateUrl: 'login.template.html'
})
export class loginComponent {
  public user = new User('','');
  public errorMsg = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login() {
    this.authService.login(this.user).then(result => {
      if(result) {
        this.router.navigate(['mainView']);
      }
    }).catch((errorMessage) => {
      this.errorMsg = errorMessage;
    });
  }

}
