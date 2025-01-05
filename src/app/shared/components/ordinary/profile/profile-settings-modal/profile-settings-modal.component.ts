import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
    MatDialog,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
} from "@angular/material/dialog";

import { ChangePasswordModalComponent } from "src/app/shared/components/ordinary/profile/profile-settings-modal/change-password-modal/change-password-modal.component";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatButton } from "@angular/material/button";

@Component({
    selector: "app-profile-settings-modal",
    imports: [
        MatDialogTitle,
        MatDialogContent,
        ReactiveFormsModule,
        MatCheckbox,
        MatButton,
        MatDialogActions,
        MatDialogClose
    ],
    templateUrl: "./profile-settings-modal.component.html",
    styleUrl: "./profile-settings-modal.component.css"
})
export class ProfileSettingsModalComponent {
    notificationsForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog
    ) {
        this.notificationsForm = this.fb.group({
            receiveNotifications: [true] // Default to true
        });
    }

    openChangePasswordModal(): void {
        this.dialog.open(ChangePasswordModalComponent);
    }
}
