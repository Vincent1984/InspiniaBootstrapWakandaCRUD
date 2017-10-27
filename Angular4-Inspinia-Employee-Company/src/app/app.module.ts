import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ROUTES } from "./app.routes";
import { AppComponent } from './app.component';

// Shared module
import { SharedModule } from './shared/shared.module';

// App views
import { CompaniesViewModule } from "./views/companies-view/companies-view.module";
import { EmployeesViewModule } from "./views/employees-view/employees-view.module";
import { EmployeeinfoViewModule } from './views/employeeinfo-view/employeeinfo-view.module'

import { LoginModule } from "./views/login/login.module";
import { RegisterModule } from "./views/register/register.module";

// App modules/components
import { LayoutsModule } from "./components/common/layouts/layouts.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular modules
    HttpModule,

    // Views
    CompaniesViewModule,
    EmployeesViewModule,
    EmployeeinfoViewModule,
    LoginModule,
    RegisterModule,

    // Modules
    SharedModule,
    LayoutsModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
