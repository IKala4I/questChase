import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { MatCard } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: "app-login-register-form",
    imports: [ReactiveFormsModule, NgIf, RouterLink, MatCard, MatFormField, MatInput, MatButton, MatIcon, MatLabel],
    templateUrl: "./login-register-form.component.html",
    styleUrl: "./login-register-form.component.css"
})
export class LoginRegisterFormComponent {
    @Input() mode: "login" | "register" = "login";
    @Output() submitForm = new EventEmitter<{ username: string; password: string; email?: string }>();

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            username: ["", Validators.required],
            password: ["", [Validators.required, Validators.minLength(6)]],
            email: [""]
        });
    }

    get isRegisterMode(): boolean {
        return this.mode === "register";
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.submitForm.emit(this.form.value);
        }
    }
}
