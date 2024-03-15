import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employees/employees';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
empData = EMPLOYEES;
projects:number = 4;
hasProject:number = 0;
hasNoProject:number = 0;

ngOnInit(): void {
 this.hasProject =  this.empData.filter(emp => emp.hasProject).length;
 this.hasNoProject =  this.empData.filter(emp => !emp.hasProject).length
}
}
