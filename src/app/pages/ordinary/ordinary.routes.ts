import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/components/layout/layout.component";

export const ordinaryRoutes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            },
            {
                path: "home",
                loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)
            },
            {
                path: "profile",
                loadComponent: () =>
                    import("src/app/shared/components/ordinary/profile/profile.component").then(m => m.ProfileComponent)
            },
            {
                path: "leaderboard",
                loadComponent: () =>
                    import("src/app/shared/components/ordinary/leaderboard/leaderboard.component").then(
                        m => m.LeaderboardComponent
                    )
            },
            {
                path: "help-support",
                loadComponent: () =>
                    import("src/app/shared/components/ordinary/help-support/help-support.component").then(
                        m => m.HelpSupportComponent
                    )
            },
            {
                path: "quests",
                loadComponent: () =>
                    import("src/app/shared/components/ordinary/quests/quests.component").then(m => m.QuestsComponent)
            },
            {
                path: "quests/create",
                loadComponent: () =>
                    import("src/app/shared/components/ordinary/quests/create-quest/create-quest.component").then(
                        m => m.CreateQuestComponent
                    )
            },
            {
                path: "quests/:id",
                loadComponent: () =>
                    import("src/app/shared/components/ordinary/quests/quest-details/quest-details.component").then(
                        m => m.QuestDetailsComponent
                    )
            }
        ]
    }
];
