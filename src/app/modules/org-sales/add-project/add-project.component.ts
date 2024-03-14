import { Component } from '@angular/core';
import { PROJECTS } from '../projects/projects';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EMPLOYEES } from '../../../shared/components/employees/employees';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent {
  projectTypes: string[] = ['Short Term', 'Long Term'];
  leads:string[]=['A','B','C','D'];
  managers:string[]=['X','Y','Z'];
  projectForm: FormGroup;
  employees=EMPLOYEES;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: [''],
      projectType: [''],
      leadBy: [''],
      managedBy: [''],
      clientName: [''],
      employees:this.fb.array([this.employee])
    })
  }
  
  addProject(e: any) {
    e.preventDefault();
    // PROJECTS.push(this.projectForm.value)
    // this.projectForm.reset()

    console.log(this.projectForm.value)
  }

  get employee(){
    return this.fb.group({
      name:[''],
      salary:['']
    })
  }

  get allEmployees() {
    return this.projectForm.get('employees') as FormArray;
  }

  addAlias() {
    this.allEmployees.push(this.employee);
  }


  cancel() {
    this.projectForm.reset()
  }



}
