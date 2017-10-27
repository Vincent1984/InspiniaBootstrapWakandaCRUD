import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: 'register.template.html'
})
export class registerComponent {
  private errorMsg: string;
  private user: any = {role: "user"};

  constructor(
    private registerService: RegisterService,
    private router: Router) {

  }

  register() {
    this.registerService.register(this.user).then((result) => {
      if(result.error) {
        this.errorMsg = result.errorMessage;
      } else {
        this.router.navigate(['login']);
      }
    }).catch((errorMessage) => {
      this.errorMsg = errorMessage;
    });
  }

}
