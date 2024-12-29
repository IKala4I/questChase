import { Component } from "@angular/core";

import { LandingComponent } from "src/app/pages/landing/landing.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    imports: [LandingComponent],
    styleUrl: "./app.component.css"
})
export class AppComponent {}
