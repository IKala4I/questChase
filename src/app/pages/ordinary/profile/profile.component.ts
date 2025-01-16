import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardContent, MatCardImage } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { Subject } from "rxjs";
import { takeUntil, delay } from "rxjs/operators";

import { ProfileService } from "src/app/shared/services/ordinary/profile.service";
import { ProfileData } from "src/app/shared/interfaces/profile.interface";
import { EditProfileModalComponent } from "src/app/shared/components/ordinary/profile/edit-profile-modal/edit-profile-modal.component";
import { ProfileSettingsModalComponent } from "src/app/shared/components/ordinary/profile/profile-settings-modal/profile-settings-modal.component";

@Component({
    selector: "app-profile",
    imports: [CommonModule, MatButton, MatCard, MatCardImage, MatCardContent, MatIconModule, MatTableModule],
    templateUrl: "./profile.component.html",
    styleUrls: ["../../../shared/styles.css", "./profile.component.css"]
})
export class ProfileComponent implements OnInit, OnDestroy {
    profileData: ProfileData;
    displayedColumns: string[] = ["title", "info"];
    activeData: any = [];
    skeletonRows = Array(10);
    private destroy$ = new Subject<void>();

    constructor(
        private dialog: MatDialog,
        private profileService: ProfileService
    ) {}

    ngOnInit(): void {
        this.fetchProfileData();
    }

    fetchProfileData(): void {
        this.profileService
            .getProfileData()
            .pipe(delay(2000), takeUntil(this.destroy$))
            .subscribe({
                next: data => {
                    this.profileData = data;
                    this.activeData = [
                        {
                            title: "Total Points",
                            info: this.profileData.summary.totalPoints
                        },
                        {
                            title: "Total Rewards",
                            info: this.profileData.summary.totalRewards
                        },
                        {
                            title: "Total Quests",
                            info: this.profileData.summary.totalQuests
                        }
                    ];
                },
                error: error => {
                    console.error("Error fetching profile data:", error);
                }
            });
    }

    openEditProfileModal(): void {
        const dialogRef = this.dialog.open(EditProfileModalComponent, {
            data: { ...this.profileData.user }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.profileData.user = { ...this.profileData.user, ...result };
            }
        });
    }

    openProfileSettingsModal(): void {
        this.dialog.open(ProfileSettingsModalComponent);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
