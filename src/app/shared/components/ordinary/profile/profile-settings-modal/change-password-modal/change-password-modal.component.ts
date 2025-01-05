import { Component } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";

@Component({
    selector: "app-change-password-modal",
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDialogTitle,
        MatDialogContent,
        ReactiveFormsModule,
        MatDialogClose
    ],
    templateUrl: "./change-password-modal.component.html",
    styleUrl: "./change-password-modal.component.css"
})
export class ChangePasswordModalComponent {
    passwordForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.passwordForm = this.fb.group({
            currentPassword: ["", [Validators.required]],
            newPassword: ["", [Validators.required, Validators.minLength(6)]],
            confirmPassword: ["", [Validators.required]]
        });
    }

    onSubmit(): void {
        if (
            this.passwordForm.valid &&
            this.passwordForm.value.newPassword === this.passwordForm.value.confirmPassword
        ) {
            console.log("Password changed successfully", this.passwordForm.value);
            // Add logic to handle password change
        } else {
            console.error("Passwords do not match");
        }
    }
}
