import { Injectable } from '@angular/core';

import { WakandaService } from '../../shared/services';


@Injectable()
export class RegisterService {

  constructor(private wakanda: WakandaService) {

  }

  register(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.wakanda.getCatalog().then(ds => {
        ds.User.addUser(body).then(res => {
          resolve(res);
        }).catch((error) => {
          reject(error.message);
        });
      });

    });
  }

}
