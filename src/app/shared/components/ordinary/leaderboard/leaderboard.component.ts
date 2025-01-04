import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";

import { LeaderboardEntry } from "src/app/shared/interfaces/leaderboard.interface";

@Component({
    selector: "app-leaderboard",
    imports: [CommonModule, MatTabsModule, MatTableModule, MatIconModule],
    templateUrl: "./leaderboard.component.html",
    styleUrl: "./leaderboard.component.css"
})
export class LeaderboardComponent {
    displayedColumns: string[] = ["rank", "user", "completedQuests"];
    tabs = ["daily", "weekly", "monthly", "allTime"];

    activeTabIndex = 0;

    get activeData(): LeaderboardEntry[] {
        return this.leaderboardData[this.tabs[this.activeTabIndex]] || [];
    }

    leaderboardData: { [key: string]: LeaderboardEntry[] } = {
        daily: [
            { rank: 1, avatar: "assets/avatar.jpg", username: "Alice", completedQuests: 2 },
            { rank: 2, avatar: "assets/avatar.jpg", username: "Bob", completedQuests: 1 }
        ],
        weekly: [
            { rank: 1, avatar: "assets/avatar.jpg", username: "Alice", completedQuests: 5 },
            { rank: 2, avatar: "assets/avatar.jpg", username: "Bob", completedQuests: 4 },
            { rank: 3, avatar: "assets/avatar.jpg", username: "Charlie", completedQuests: 3 }
        ],
        monthly: [
            { rank: 1, avatar: "assets/avatar.jpg", username: "Alice", completedQuests: 20 },
            { rank: 2, avatar: "assets/avatar.jpg", username: "Bob", completedQuests: 18 }
        ],
        allTime: [
            { rank: 1, avatar: "assets/avatar.jpg", username: "Alice", completedQuests: 100 },
            { rank: 2, avatar: "assets/avatar.jpg", username: "Bob", completedQuests: 90 }
        ]
    };
}
