import { Component, Input } from "@angular/core";
import { NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: "app-sidebar",
    imports: [NgForOf, RouterLink, MatIcon],
    templateUrl: "./sidebar.component.html",
    styleUrl: "./sidebar.component.css"
})
export class SidebarComponent {
    @Input() mode: "ordinary" | "crypto" = "ordinary";

    get menuItems() {
        return this.mode === "ordinary"
            ? [
                  { icon: "home", label: "Home", link: "/ordinary/home" },
                  { icon: "explore", label: "Quests", link: "/ordinary/quests" },
                  { icon: "leaderboard", label: "Leaderboard", link: "/ordinary/leaderboard" },
                  { icon: "person", label: "Profile", link: "/ordinary/profile" },
                  { icon: "help", label: "Help", link: "/ordinary/help" }
              ]
            : [
                  { icon: "home", label: "Dashboard", link: "/crypto/dashboard" },
                  { icon: "explore", label: "Quests", link: "/crypto/quests" },
                  { icon: "leaderboard", label: "Leaderboard", link: "/crypto/leaderboard" },
                  { icon: "person", label: "Profile", link: "/crypto/profile" },
                  { icon: "help", label: "Help", link: "/crypto/help" }
              ];
    }
}
