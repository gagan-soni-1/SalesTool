import { Routes } from "@angular/router";
import { RequestsComponent } from "./requests/requests.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const adminRoutes:Routes=[
    {
        path:'',component:DashboardComponent
    },
    {
        path:'requests',component:RequestsComponent
    }
]