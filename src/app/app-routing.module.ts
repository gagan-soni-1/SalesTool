import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'portal',
    component:MainComponent,
    children:[
      {
        path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)
      },
      {
        path:'org-admin',loadChildren:()=>import('./modules/org-admin/org-admin.module').then(m=>m.OrgAdminModule)
      },
      {
        path:'hr',loadChildren:()=>import('./modules/org-hr/org-hr.module').then(m=>m.OrgHrModule)
      },
      {
        path:'sales',loadChildren:()=>import('./modules/org-sales/org-sales.module').then(m=>m.OrgSalesModule)
      }

    ]
  },
  {
    path:'**', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
