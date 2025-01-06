import { Component, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { SidebarComponent } from "src/app/shared/components/sidebar/sidebar.component";

@Component({
    selector: "app-layout",
    imports: [SidebarComponent, RouterOutlet],
    templateUrl: "./layout.component.html",
    styleUrl: "./layout.component.css"
})
export class LayoutComponent {
    @Input() mode: "ordinary" | "crypto" = "ordinary";
}
