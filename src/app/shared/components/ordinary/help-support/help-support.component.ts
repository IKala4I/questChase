import { Component } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
    selector: "app-help-support",
    imports: [CommonModule, MatTabsModule, MatExpansionModule, MatButtonModule, MatFormFieldModule, MatInputModule],
    templateUrl: "./help-support.component.html",
    styleUrl: "./help-support.component.css"
})
export class HelpSupportComponent {
    faq = [
        {
            question: "What is Quests?",
            answer: "Quests is a platform designed to help creators build and monetize their skills. We offer a variety of challenges, called Quests, that range from simple tasks to complex projects. You can earn rewards, build a portfolio, and learn new skills by completing Quests. Quests is built on the Ethereum blockchain, so you can showcase your work in a decentralized way."
        },
        {
            question: "How do I start a Quest?",
            answer: "To start a Quest, visit the Quests page, select a Quest you like, and follow the instructions provided."
        },
        {
            question: "How do I find a Quest?",
            answer: "You can find Quests by browsing the Quests page or using the search feature to filter by your interests."
        },
        {
            question: "How do I get paid for my Quests?",
            answer: "You will receive rewards upon completing a Quest, which are credited to your wallet connected to the platform."
        },
        {
            question: "How do I get feedback on my Quests?",
            answer: "Feedback is provided by the Quest creator or community members once you submit your Quest."
        }
    ];
}
