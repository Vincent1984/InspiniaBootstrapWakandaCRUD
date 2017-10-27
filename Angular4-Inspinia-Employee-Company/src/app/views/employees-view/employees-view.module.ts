import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { employeesViewComponent } from "./employees-view.component";
import { EmployeeService } from './employees-view.service';

@NgModule({
    declarations: [employeesViewComponent],
    imports     : [SharedModule],
    providers   : [EmployeeService]

})

export class EmployeesViewModule {}
