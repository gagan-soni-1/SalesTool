import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from '../components/members/members.component';
import { AddMemberComponent } from '../components/add-member/add-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { EmployeesComponent } from '../components/employees/employees.component';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';


@NgModule({
  declarations: [
    MembersComponent,
    AddMemberComponent,
    EmployeesComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
  ]
})

export class SharedModule { }
