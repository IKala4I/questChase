import { Component, output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { LaunchAppFormComponent } from "src/app/shared/components/navbar/launch-app-form/launch-app-form.component";
import { ILaunchAppForm } from "src/app/shared/interfaces/launch-app-form.interface";

@Component({
    selector: "app-navbar",
    imports: [],
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.css"
})
export class NavbarComponent {
    launchedApp = output<ILaunchAppForm>();

    constructor(private dialog: MatDialog) {}

    openLaunchForm(): void {
        const dialogRef = this.dialog.open(LaunchAppFormComponent);

        dialogRef.afterClosed().subscribe((res: ILaunchAppForm) => {
            if (res) {
                this.launchedApp.emit(res);
            }
        });
    }
}
