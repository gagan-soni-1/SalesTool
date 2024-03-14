import { Routes } from "@angular/router";
import { MembersComponent } from "../../shared/components/members/members.component";
import { AddMemberComponent } from "../../shared/components/add-member/add-member.component";
import { EmployeesComponent } from "../../shared/components/employees/employees.component";
import { AddEmployeeComponent } from "../../shared/components/add-employee/add-employee.component";

export const HR_ROUTES:Routes = [
    {
        path:'members',component:MembersComponent
    },
    {
        path:'member/:param',component:AddMemberComponent
    },
    {
        path:'employee',component:EmployeesComponent
    },
    {
        path:'employee/:param',component:AddEmployeeComponent
    },
    {
        path:'', redirectTo:'members',pathMatch:'full'
    }
]