import { Component, Input, OnInit } from "@angular/core";
import { NgForOf } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";

@Component({
    selector: "app-sidebar",
    imports: [NgForOf, RouterLink, MatIcon, MatIconButton, RouterLinkActive],
    templateUrl: "./sidebar.component.html",
    styleUrl: "./sidebar.component.css"
})
export class SidebarComponent implements OnInit {
    @Input() mode: "ordinary" | "crypto" = "ordinary";
    isMenuOpen: boolean = false;

    menuItems: { [key: string]: string }[] = [];

    ngOnInit(): void {
        this.menuItems =
            this.mode === "ordinary"
                ? [
                      { icon: "home", label: "Home", link: "/ordinary/home" },
                      { icon: "explore", label: "Quests", link: "/ordinary/quests" },
                      { icon: "leaderboard", label: "Leaderboard", link: "/ordinary/leaderboard" },
                      { icon: "person", label: "Profile", link: "/ordinary/profile" },
                      { icon: "help", label: "Help", link: "/ordinary/help-support" }
                  ]
                : [
                      { icon: "home", label: "Dashboard", link: "/crypto/dashboard" },
                      { icon: "explore", label: "Quests", link: "/crypto/quests" },
                      { icon: "leaderboard", label: "Leaderboard", link: "/crypto/leaderboard" },
                      { icon: "person", label: "Profile", link: "/crypto/profile" },
                      { icon: "help", label: "Help", link: "/crypto/help" }
                  ];
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
