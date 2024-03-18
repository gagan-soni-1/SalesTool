import { Routes } from "@angular/router";
import { MembersComponent } from "../../shared/components/members/members.component";
import { AddMemberComponent } from "../../shared/components/add-member/add-member.component";
import { DashboardComponent } from "../../shared/components/dashboard/dashboard.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ViewProjectsComponent } from "./view-projects/view-projects.component";

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
    {
        path:'projects', component:ProjectsComponent
    },
    {
        path:'projects/view', component:ViewProjectsComponent
    },
]