import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {EmployeeinfoViewComponent} from "./employeeinfo-view.component";
import {EmployeeDetailService} from './employeeinfo-view.service';

@NgModule({
    declarations: [EmployeeinfoViewComponent],
    imports     : [SharedModule],
    providers   : [EmployeeDetailService]
})

export class EmployeeinfoViewModule {}
