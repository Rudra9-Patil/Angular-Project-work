import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {'id':1,'name':'andrew','age':30},
      {'id':2,'name':'brandon','age':25},
      {'id':3,'name':'christina','age':26},
      {'id':4,'name':'elena','age':28}

    ]
  }
}
