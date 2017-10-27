import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {companiesViewComponent} from "./companies-view.component";
import {CompanyService} from './companies-view.service';

@NgModule({
    declarations: [companiesViewComponent],
    imports     : [SharedModule],
    providers   : [CompanyService]
})

export class CompaniesViewModule {}
