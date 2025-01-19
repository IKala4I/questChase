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
import { MatButton, MatIconButton } from "@angular/material/button";
import { Router } from "@angular/router";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: "app-profile-settings-modal",
    imports: [
        MatDialogTitle,
        MatDialogContent,
        ReactiveFormsModule,
        MatCheckbox,
        MatButton,
        MatDialogActions,
        MatDialogClose,
        MatIconButton,
        MatIcon
    ],
    templateUrl: "./profile-settings-modal.component.html",
    styleUrl: "./profile-settings-modal.component.css"
})
export class ProfileSettingsModalComponent {
    notificationsForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog,
        private router: Router
    ) {
        this.notificationsForm = this.fb.group({
            receiveNotifications: [true] // Default to true
        });
    }

    openChangePasswordModal(): void {
        this.dialog.open(ChangePasswordModalComponent);
    }

    logout(): void {
        this.router.navigate(["/landing"]);
    }
}
