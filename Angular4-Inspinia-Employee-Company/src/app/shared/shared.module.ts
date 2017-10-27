import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from 'ngx-pagination'; // pagination module: http://michaelbromley.github.io/ngx-pagination/#/
import { ModalModule } from 'ngx-bootstrap/modal'; // Modal https://valor-software.com/ngx-bootstrap/#/modals
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; // Datepicker https://valor-software.com/ngx-bootstrap/#/modals
import { WakandaService, AuthenticationService, AppGuard } from './services';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [],
  exports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    ModalModule,
    BsDatepickerModule
  ],
  providers: [
    WakandaService,
    AuthenticationService,
    AppGuard,
    BsModalService
  ],
})
export class SharedModule { }
