import { Component } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardContent, MatCardImage } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { animate, style, transition, trigger } from "@angular/animations";
import { NgForOf } from "@angular/common";

@Component({
    selector: "app-profile",
    imports: [MatButton, MatCard, MatCardImage, MatCardContent, MatIcon, NgForOf],
    templateUrl: "./profile.component.html",
    styleUrl: "./profile.component.css",
    animations: [
        trigger("fadeAnimation", [
            transition(":enter", [style({ opacity: 0 }), animate("300ms", style({ opacity: 1 }))]),
            transition(":leave", [animate("300ms", style({ opacity: 0 }))])
        ])
    ]
})
export class ProfileComponent {
    user = {
        name: "Alice Johnson",
        location: "San Francisco, CA",
        username: "@alicejohnson",
        avatar: "assets/avatar.jpg"
    };

    completedQuests = [
        {
            title: "Unbox Quest",
            description: "Collect the Unbox NFT set and earn 500 points",
            image: "assets/image-placeholder.png"
        },
        {
            title: "Fomo Quest",
            description: "Join Fomo DAO and earn 200 points",
            image: "assets/image-placeholder.png"
        },
        {
            title: "NFT Quest",
            description: "Mint an NFT on OpenSea and earn 300 points",
            image: "assets/image-placeholder.png"
        },
        {
            title: "Satoshi Quest",
            description: "Solve the Bitcoin whitepaper and earn 400 points",
            image: "assets/image-placeholder.png"
        }
    ];

    summary = {
        totalPoints: 5000,
        totalRewards: "$1,000",
        totalQuests: 50
    };

    achievements = [
        { title: "Quest Master", icon: "star", description: "Complete 50 quests" },
        { title: "NFT Collector", icon: "collections", description: "Collect 10 unique NFTs" },
        { title: "Early Adopter", icon: "timer", description: "Join 5 DAOs before 2023" }
    ];
}
