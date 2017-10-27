import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services';
declare var jQuery:any;

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent {
    private errorMsg: string;

    constructor(private router: Router, private authService: AuthenticationService) {}

    logout() {
      this.authService.logout().then(result => {
        if(result) {
          this.router.navigate(['login']);
        }
      }).catch((errorMessage) => {
        this.errorMsg = errorMessage;
      });
    }

    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

}
