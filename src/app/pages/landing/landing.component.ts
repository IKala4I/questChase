import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

import { NavbarComponent } from "src/app/shared/components/navbar/navbar.component";
import { LaunchAppFormComponent } from "src/app/shared/components/navbar/launch-app-form/launch-app-form.component";
import { AppModes, ILaunchAppForm } from "src/app/shared/interfaces/launch-app-form.interface";

@Component({
    selector: "app-landing",
    imports: [MatIcon, NavbarComponent],
    templateUrl: "./landing.component.html",
    styleUrl: "./landing.component.css"
})
export class LandingComponent {
    constructor(
        private dialog: MatDialog,
        private router: Router
    ) {}

    openLaunchForm(): void {
        const dialogRef = this.dialog.open(LaunchAppFormComponent);

        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.launchApp(res);
            }
        });
    }

    onLaunchApp(event: ILaunchAppForm): void {
        this.launchApp(event);
    }

    private launchApp(launchAppForm: ILaunchAppForm): void {
        console.log(launchAppForm);
        if (launchAppForm.mode === AppModes.Ordinary) {
            this.router.navigate(["/ordinary"]);
        } else {
            this.router.navigate(["/crypto"]);
        }
    }
}
