import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-quests",
    imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule],
    templateUrl: "./quests.component.html",
    styleUrl: "./quests.component.css"
})
export class QuestsComponent {
    difficulties = ["Beginner", "Intermediate", "Advanced", "Expert"];
    types = ["Task", "Project", "Challenge"];
    rewardTypes = ["Experience Points", "NFTs", "Tokens"];
    fields = ["IT", "Economic", "Art", "Science"];

    quests = [
        { title: "Art", quests: 1234, image: "assets/image-placeholder.png" },
        { title: "Science", quests: 4567, image: "assets/image-placeholder.png" },
        { title: "Tech", quests: 2345, image: "assets/image-placeholder.png" },
        { title: "Language", quests: 3456, image: "assets/image-placeholder.png" },
        { title: "Health", quests: 9876, image: "assets/image-placeholder.png" },
        { title: "Education", quests: 5678, image: "assets/image-placeholder.png" }
    ];

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    navigateToQuest(): void {
        this.router.navigate(["1"], { relativeTo: this.route });
    }

    createQuest(): void {
        this.router.navigate(["create"], { relativeTo: this.route });
    }
}
