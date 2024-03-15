import { Routes } from "@angular/router";
import { ProjectsComponent } from "./projects/projects.component";
import { AddProjectComponent } from "./add-project/add-project.component";
import { DashboardComponent } from "../../shared/components/dashboard/dashboard.component";

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