import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {registerComponent} from "./register.component";
import {RegisterService} from './register.service';

@NgModule({
    declarations: [registerComponent],
    imports     : [SharedModule],
    providers   : [RegisterService],
})

export class RegisterModule {}
