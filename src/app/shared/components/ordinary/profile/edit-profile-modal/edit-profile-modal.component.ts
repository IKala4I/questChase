import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "app-edit-profile-modal",
    imports: [
        CommonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule
    ],
    templateUrl: "./edit-profile-modal.component.html",
    styleUrl: "./edit-profile-modal.component.css"
})
export class EditProfileModalComponent {
    editProfileForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<EditProfileModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.editProfileForm = this.fb.group({
            username: [data?.username || "", [Validators.required, Validators.minLength(3)]],
            email: [data?.email || "", [Validators.required, Validators.email]],
            firstName: [data?.firstName || "", Validators.required],
            lastName: [data?.lastName || "", Validators.required],
            avatar: [data?.avatar || ""]
        });
    }

    onSubmit(): void {
        if (this.editProfileForm.valid) {
            this.dialogRef.close(this.editProfileForm.value); // Pass the form data back
        }
    }
}
