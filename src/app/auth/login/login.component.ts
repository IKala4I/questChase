import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginRegisterFormComponent } from "src/app/auth/login-register-form/login-register-form.component";

@Component({
    selector: "app-login",
    imports: [ReactiveFormsModule, LoginRegisterFormComponent],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css"
})
export class LoginComponent {
    onSubmit(event: { username: string; password: string }): void {
        console.log("Login data:", event);
    }
}
