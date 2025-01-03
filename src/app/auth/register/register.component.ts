import { Component } from "@angular/core";

import { LoginRegisterFormComponent } from "src/app/auth/login-register-form/login-register-form.component";

@Component({
    selector: "app-register",
    imports: [LoginRegisterFormComponent],
    templateUrl: "./register.component.html",
    styleUrl: "./register.component.css"
})
export class RegisterComponent {
    onSubmit(event: { username: string; password: string; email?: string }): void {
        console.log("Register data:", event);
    }
}
