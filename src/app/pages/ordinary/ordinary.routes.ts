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
            }
        ]
    }
];