import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-notifications",
    imports: [CommonModule],
    templateUrl: "./notifications.component.html",
    styleUrls: ["./notifications.component.css"]
})
export class NotificationsComponent implements OnInit {
    notifications: any = [];

    constructor() {}

    ngOnInit(): void {
        this.notifications = [
            {
                title: "Submission for 'Create a New Product' quest",
                description:
                    "Your submission is being reviewed by our team. You will be notified once it is approved or rejected.",
                icon: "assets/notification-placeholder.png"
            },
            {
                title: "Points claimed",
                description: "Claimed 250 points for 'Create a New Product' quest",
                icon: "assets/notification-placeholder.png"
            },
            {
                title: "Points claimed",
                description: "Claimed 150 points for 'Create a New Product' quest",
                icon: "assets/notification-placeholder.png"
            },
            {
                title: "Points claimed",
                description: "Claimed 100 points for 'Create a New Product' quest",
                icon: "assets/notification-placeholder.png"
            },
            {
                title: "Points claimed",
                description: "Claimed 500 points for 'Create a New Product' quest",
                icon: "assets/notification-placeholder.png"
            }
        ];
    }
}
