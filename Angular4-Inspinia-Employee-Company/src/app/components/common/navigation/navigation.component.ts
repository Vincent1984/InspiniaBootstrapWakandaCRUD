import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services';

declare var jQuery:any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements OnInit{
    private currentUser: any = {};

    constructor(private router: Router, private authService: AuthenticationService) {}

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

    activeRoute(routename: string): boolean {
      return this.router.url.indexOf(routename) > -1;
    }

    ngOnInit() {
      this.authService.getCurrentUser().then(user => {
        this.currentUser = user;
      }).catch((errorMessage) => {
        console.log(errorMessage);
      });
    }

}
