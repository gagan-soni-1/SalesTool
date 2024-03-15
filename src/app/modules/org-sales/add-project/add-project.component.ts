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
      selectedEmployeeName:[''],
      workingEmployee:[''],
      SalaryPerMonth:[],
      seatingCost:[],
      outsourceCost:[],
      otherCost:[],
      isTaxApplicable:[false],
      taxPercantage:[],
      profit:[]
    })
  }

  get allEmployees() {
    return this.projectForm.get('employees') as FormArray;
  }

  addEmployee() {
    this.allEmployees.push(this.employee);
  }

  removeEmployee(i:number):void{
    this.allEmployees.removeAt(i)
  }

  employeeSelected(e:any,i:number):void{
    this.setEmployeeData(e?.target?.value,i)
  }

  setEmployeeData(e:any,i:number):void{
    let emp = this.employees.find(em=>em.Name == e)
    this.allEmployees.at(i).patchValue({
      SalaryPerMonth:emp?.SalaryPerMonth,
      seatingCost:emp?.seatingCost,
    })

    this.calculate(i);
  }

  calculate(i:number):void{
    let calcObj = this.allEmployees.at(i).value;
    let profit:number = 0
    if(calcObj.seatingCost && calcObj.otherCost && calcObj.outsourceCost ){
      let employeeCost = calcObj.SalaryPerMonth+calcObj.seatingCost + calcObj.otherCost
      if(calcObj.isTaxApplicable){
        let afterTaxDeduction = calcObj.outsourceCost-(calcObj.outsourceCost*(calcObj.taxPercantage/100))
        profit = afterTaxDeduction - employeeCost
      } else {
        profit = calcObj.outsourceCost - employeeCost
      }
      this.allEmployees.at(i).patchValue({profit:profit})
    }
  }

  cancel(e:any) {
    e.preventDefault();
    // this.projectForm.reset()

  }

}
