import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests/requests.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestsComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
