import { Component, Input } from "@angular/core";
import { SidebarComponent } from "src/app/shared/components/sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-layout",
    imports: [SidebarComponent, RouterOutlet],
    templateUrl: "./layout.component.html",
    styleUrl: "./layout.component.css"
})
export class LayoutComponent {
    @Input() mode: "ordinary" | "crypto" = "ordinary";
}
