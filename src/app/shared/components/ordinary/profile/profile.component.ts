import { Component } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardContent, MatCardImage } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { NgForOf } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";

import { EditProfileModalComponent } from "src/app/shared/components/ordinary/profile/edit-profile-modal/edit-profile-modal.component";
import { ProfileSettingsModalComponent } from "src/app/shared/components/ordinary/profile/profile-settings-modal/profile-settings-modal.component";

@Component({
    selector: "app-profile",
    imports: [MatButton, MatCard, MatCardImage, MatCardContent, MatIcon, NgForOf],
    templateUrl: "./profile.component.html",
    styleUrl: "./profile.component.css"
})
export class ProfileComponent {
    user = {
        name: "Alice Johnson",
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

    constructor(private dialog: MatDialog) {}

    openEditProfileModal(): void {
        const dialogRef = this.dialog.open(EditProfileModalComponent, {
            data: {
                username: this.user.username,
                email: "alice.johnson@example.com", // Provide existing user data
                firstName: "Alice",
                lastName: "Johnson",
                avatar: this.user.avatar
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log("Updated Profile:", result);
                // Update user data with result
                this.user = {
                    ...this.user,
                    username: result.username,
                    avatar: result.avatar
                };
            }
        });
    }

    openProfileSettingsModal(): void {
        this.dialog.open(ProfileSettingsModalComponent);
    }
}
