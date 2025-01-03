import { Routes } from "@angular/router";

import { LandingComponent } from "src/app/pages/landing/landing.component";
import { cryptoRoutes } from "src/app/pages/crypto/crypto.routes";
import { ordinaryRoutes } from "src/app/pages/ordinary/ordinary.routes";

export const routes: Routes = [
    {
        path: "landing",
        component: LandingComponent
    },
    {
        path: "ordinary",
        children: ordinaryRoutes
    },
    {
        path: "crypto",
        children: cryptoRoutes
    },
    {
        path: "",
        redirectTo: "landing",
        pathMatch: "full"
    }
];
