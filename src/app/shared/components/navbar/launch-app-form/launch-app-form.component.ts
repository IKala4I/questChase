import { Component } from "@angular/core";
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatButton } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { AppModes } from "src/app/shared/interfaces/launch-app-form.interface";

@Component({
    selector: "app-launch-app-form",
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatRadioGroup,
        MatRadioButton,
        MatCheckbox,
        MatDialogActions,
        MatButton,
        FormsModule
    ],
    templateUrl: "./launch-app-form.component.html",
    styleUrl: "./launch-app-form.component.css"
})
export class LaunchAppFormComponent {
    mode: AppModes = AppModes.Ordinary;
    remember: boolean = false;

    constructor(private dialogRef: MatDialogRef<LaunchAppFormComponent>) {}

    onLaunch(): void {
        this.dialogRef.close({
            mode: this.mode,
            remember: this.remember
        });
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
