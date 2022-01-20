import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
 employees:any=[] ;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this._employeeService.getEmployees()
  }

}
