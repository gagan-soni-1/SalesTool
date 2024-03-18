import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { orgAdminRoutes } from './org-admin.routes';
import { SharedModule } from '../../shared/modules/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    ViewProjectsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(orgAdminRoutes),
   
    SharedModule
  ]
})
export class OrgAdminModule { }
