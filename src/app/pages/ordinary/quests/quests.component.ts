import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil, delay } from "rxjs/operators";

import { QuestsService } from "src/app/shared/services/ordinary/quests.service";
import { Quest } from "src/app/shared/interfaces/quest.interface";

@Component({
    selector: "app-quests",
    imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule],
    templateUrl: "./quests.component.html",
    styleUrls: ["../../../shared/styles.css", "./quests.component.css"]
})
export class QuestsComponent implements OnInit, OnDestroy {
    difficulties = ["Beginner", "Intermediate", "Advanced", "Expert"];
    types = ["Task", "Project", "Challenge"];
    rewardTypes = ["Experience Points", "NFTs", "Tokens"];
    fields = ["IT", "Economic", "Art", "Science"];

    quests: Quest[] | null = null;
    private destroy$ = new Subject<void>();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private questsService: QuestsService
    ) {}

    ngOnInit(): void {
        this.fetchQuests();
    }

    fetchQuests(): void {
        this.questsService
            .getQuests()
            .pipe(delay(2000), takeUntil(this.destroy$))
            .subscribe({
                next: data => {
                    this.quests = data;
                },
                error: error => {
                    console.error("Error fetching quests:", error);
                }
            });
    }

    navigateToQuest(): void {
        this.router.navigate(["1"], { relativeTo: this.route });
    }

    createQuest(): void {
        this.router.navigate(["create"], { relativeTo: this.route });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
