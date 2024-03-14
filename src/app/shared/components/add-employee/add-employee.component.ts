import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMPLOYEES } from '../employees/employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  roles: string[] = ['HR', 'Sales'];
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.employeeForm = this.fb.group({
      empCode: [''],
      Name: [''],
      Experience: [''],
      SalaryPerMonth: [''],
      Technology: [''],
    })
  }
  
  addemployee(e: any) {
    e.preventDefault();
    EMPLOYEES.push(this.employeeForm.value)
    this.employeeForm.reset()
  }

  cancel() {
    this.employeeForm.reset()
  }

  goBack(){
    let url = this.router.url
    if(url == '/portal/hr/employee/add')
    this.router.navigate(['/portal/hr/employee'])
  }

}
