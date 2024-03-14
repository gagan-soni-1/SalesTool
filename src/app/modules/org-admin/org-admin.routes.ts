import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MembersComponent } from "../../shared/components/members/members.component";
import { AddMemberComponent } from "../../shared/components/add-member/add-member.component";

export const orgAdminRoutes:Routes=[
    {
        path:'', component:DashboardComponent
    },
    {
        path:'members', component:MembersComponent
    },
    {
        path:'member/:param', component:AddMemberComponent
    },
]