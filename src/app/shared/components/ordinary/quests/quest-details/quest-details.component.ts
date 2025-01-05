import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { MatButton } from "@angular/material/button";

@Component({
    selector: "app-quest-details",
    imports: [CommonModule, MatIcon, MatButton],
    templateUrl: "./quest-details.component.html",
    styleUrl: "./quest-details.component.css"
})
export class QuestDetailsComponent {
    questId: string | null = null;
    questStatus = "pending"; // Example status: 'pending', 'claimable'
    endingTime = "22h : 01m : 04s";
    reward = {
        type: "USDT",
        amount: 50,
        winners: 20
    };
    participants = {
        total: 121242,
        winners: 20
    };

    creator = {
        name: "Space and Time",
        verified: true,
        followers: 226000
    };

    tags = ["DeFi", "GameFi", "Web3"];
    title = "Exploring Space and Time: Module Three";
    description = "This is a detailed description of the quest.";

    sections = [
        { type: "Social Tasks", tasks: ["Follow on Twitter", "Retweet a post"] },
        { type: "Company Tasks", tasks: ["Sign up on the platform", "Complete a survey"] },
        { type: "Quizzes", tasks: ["Answer 10 questions correctly", "Submit answers"] }
    ];

    constructor(private route: ActivatedRoute) {
        this.questId = this.route.snapshot.paramMap.get("id");
    }
}
