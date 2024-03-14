import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { SALES_ROUTES } from './sales.routes';
import { AddProjectComponent } from './add-project/add-project.component';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SALES_ROUTES),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrgSalesModule { }
