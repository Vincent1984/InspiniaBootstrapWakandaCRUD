import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { loginComponent } from "./login.component";

@NgModule({
    declarations: [loginComponent],
    imports     : [SharedModule],
})

export class LoginModule {}
