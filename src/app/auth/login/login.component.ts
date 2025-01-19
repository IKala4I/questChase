import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LoginRegisterFormComponent } from "src/app/auth/login-register-form/login-register-form.component";

@Component({
    selector: "app-login",
    imports: [LoginRegisterFormComponent],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css"
})
export class LoginComponent {
    constructor(private router: Router) {}

    onSubmit(_: { username: string; password: string }): void {
        this.router.navigate(["/ordinary"]);
    }
}
