import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employees:any=[]

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this._employeeService.getEmployees()

  }

}
