export interface Employee{
    empCode:string;
    Name:string;
    Experience:number; 
    SalaryPerMonth:number;
    Technology:string;
    outsourceCost?:number;
    seatingCost?:number;
    hasProject?:boolean;
}