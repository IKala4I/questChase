import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import * as allTime from "src/assets/mock/leaderboard/leaderboard-all-time.json";
import * as daily from "src/assets/mock/leaderboard/leaderboard-daily.json";
import * as weekly from "src/assets/mock/leaderboard/leaderboard-weekly.json";
import * as monthly from "src/assets/mock/leaderboard/leaderboard-monthly.json";
import { LeaderboardEntry } from "src/app/shared/interfaces/leaderboard-entry.interface";

@Injectable({
    providedIn: "root"
})
export class LeaderboardService {
    allTimeData: LeaderboardEntry[] = allTime.data;
    dailyData: LeaderboardEntry[] = daily.data;
    weeklyData: LeaderboardEntry[] = weekly.data;
    monthlyData: LeaderboardEntry[] = monthly.data;

    constructor() {}

    getLeaderboardData(tab: string): Observable<LeaderboardEntry[]> {
        switch (tab) {
            case "all-time":
                return this.getAllTimeData();
            case "weekly":
                return this.getWeeklyData();
            case "monthly":
                return this.getMonthlyData();
            case "daily":
                return this.getDailyData();
            default:
                return of([]);
        }
    }

    private getAllTimeData(): Observable<LeaderboardEntry[]> {
        return of(this.allTimeData);
    }

    private getDailyData(): Observable<LeaderboardEntry[]> {
        return of(this.dailyData);
    }

    private getWeeklyData(): Observable<LeaderboardEntry[]> {
        return of(this.weeklyData);
    }

    private getMonthlyData(): Observable<LeaderboardEntry[]> {
        return of(this.monthlyData);
    }
}
