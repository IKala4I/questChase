import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LoginRegisterFormComponent } from "src/app/auth/login-register-form/login-register-form.component";

@Component({
    selector: "app-register",
    imports: [LoginRegisterFormComponent],
    templateUrl: "./register.component.html",
    styleUrl: "./register.component.css"
})
export class RegisterComponent {
    constructor(private router: Router) {}
    onSubmit(_: { username: string; password: string; email?: string }): void {
        this.router.navigate(["/ordinary"]);
    }
}
