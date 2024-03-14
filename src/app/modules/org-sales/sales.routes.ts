import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AddProjectComponent } from "./add-project/add-project.component";

export const SALES_ROUTES:Routes = [
    {
        path:'', component:DashboardComponent
    },
    {
        path:'projects', component:ProjectsComponent
    },
    {
        path:'project/:param', component:AddProjectComponent
    }
]