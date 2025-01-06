import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { Subject, delay, takeUntil } from "rxjs";

import { LeaderboardEntry } from "src/app/shared/interfaces/leaderboard.interface";
import { LeaderboardService } from "src/app/shared/services/ordinary/leaderboard.service";

@Component({
    selector: "app-leaderboard",
    imports: [CommonModule, MatTabsModule, MatTableModule, MatIconModule, MatProgressSpinner],
    templateUrl: "./leaderboard.component.html",
    styleUrl: "./leaderboard.component.css"
})
export class LeaderboardComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ["rank", "user", "completedQuests"];
    tabs = ["daily", "weekly", "monthly", "all-time"];
    activeTabIndex = 0;
    activeData: LeaderboardEntry[] = [];
    isLoading: boolean = true;

    private destroy$ = new Subject<void>();

    constructor(private leaderboardService: LeaderboardService) {}

    ngOnInit(): void {
        this.fetchLeaderboardData();
    }

    onTabChange(): void {
        this.destroy$.next();
        this.fetchLeaderboardData();
    }

    fetchLeaderboardData(): void {
        this.isLoading = true;
        const activeTab = this.tabs[this.activeTabIndex];

        this.leaderboardService
            .getLeaderboardData(activeTab)
            .pipe(delay(2000), takeUntil(this.destroy$))
            .subscribe({
                next: data => {
                    this.activeData = data;
                    this.isLoading = false;
                },
                error: err => {
                    console.error("Error fetching leaderboard data:", err);
                    this.isLoading = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
