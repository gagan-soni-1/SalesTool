import { Component } from '@angular/core';
import { PROJECTS } from '../projects/projects';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EMPLOYEES } from '../../../shared/components/employees/employees';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss','../../../shared/styles/common.scss']
})
export class AddProjectComponent {
  projectTypes: string[] = ['Short Term', 'Long Term'];
  leads:string[]=['A','B','C','D'];
  managers:string[]=['X','Y','Z'];
  projectForm: FormGroup;
  employees=EMPLOYEES;
  routeParams:any;
  projDetails:any;

  constructor(private fb: FormBuilder, private activatedRoute:ActivatedRoute) {
    this.routeParams = activatedRoute.snapshot.params
    
    this.projectForm = this.fb.group({
      projectName: [''],
      projectType: [''],
      leadBy: [''],
      managedBy: [''],
      clientName: [''],
      employees:this.fb.array([this.employee])
    })

    if(this.routeParams.param == 'add'){

    } 
    if(this.routeParams.param == 'view'){
      this.projDetails = JSON.parse(localStorage.getItem('proj') as string)
      console.log(this.projDetails);
      if(this.projDetails.employees.length>1){
        for(let i=1;i<this.projDetails.employees.length;i++)
        this.addEmployee()
      }
      this.projectForm.patchValue(this.projDetails )
    }
    
  }
  
  addProject(e: any) {
    e.preventDefault();
    PROJECTS.push(this.projectForm.value)
    this.projectForm.reset()
  }
 
  get employee(){
    return this.fb.group({
      Name:[''],
      SalaryPerMonth:[''],
      seatingCost:[''],
      outsourceCost:[''],
      otherCost:[''],
      isTaxApplicable:[false],
      taxPercantage:['']
    })
  }

  get allEmployees() {
    return this.projectForm.get('employees') as FormArray;
  }

  addEmployee() {
    this.allEmployees.push(this.employee);
  }

  removeEmployee(i:number){
    this.allEmployees.removeAt(i)
  }

  employeeSelected(e:any,i:number){
    this.setEmployeeData(e?.target?.value,i)
  }

  setEmployeeData(e:any,i:number){
    let emp = this.employees.find(em=>em.Name == e)
    this.allEmployees.at(i).patchValue({
      SalaryPerMonth:emp?.SalaryPerMonth,
      seatingCost:emp?.seatingCost,
    })
  }

  cancel() {
    this.projectForm.reset()
  }

}
