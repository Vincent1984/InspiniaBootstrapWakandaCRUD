import {Routes} from "@angular/router";
import {companiesViewComponent} from "./views/companies-view/companies-view.component";
import {employeesViewComponent} from "./views/employees-view/employees-view.component";
import {EmployeeinfoViewComponent} from "./views/employeeinfo-view/employeeinfo-view.component";

import {loginComponent} from "./views/login/login.component";
import {registerComponent} from "./views/register/register.component";
import {blankComponent} from "./components/common/layouts/blank.component";
import {basicComponent} from "./components/common/layouts/basic.component";

// guard to prevent non connected users to access the app
import {AppGuard} from './shared/services';


export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'mainView', pathMatch: 'full'},

  // App views
  {
    path: '', component: basicComponent, canActivate: [AppGuard],
    children: [
        {path: 'mainView', component: companiesViewComponent},
        {path: 'employeesView', component: employeesViewComponent},
        {path: 'employees/:id', component: EmployeeinfoViewComponent},
        {path: 'companies/:id/employees', component: employeesViewComponent}
    ]
  },
  {
    path: '', component: blankComponent, canActivate: [AppGuard],
    children: [
      { path: 'login', component: loginComponent },
      { path: 'register', component: registerComponent }
    ]
  },

  // Handle all other routes
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
