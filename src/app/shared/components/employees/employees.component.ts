import { Component } from '@angular/core';
import { EMPLOYEES } from './employees';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  employees = EMPLOYEES;
  constructor(private router:Router){}

  addEmployee(){
    this.router.navigate(['/portal/hr/employee/add'])
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const binaryString = e.target.result;
      const workbook = XLSX.read(binaryString, { type: 'binary' });
      const firstSheet = workbook.SheetNames[0];
      const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);
      console.log(excelData);
    };

    reader.readAsBinaryString(file);
  }


}
