import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  users=[
    {name:'kiran',city:'mandya',id:101,salary:30000,dob:new Date("7 jan 1998")},
    {name:'shashi',city:'vellore',id:102,salary:40000,dob:new Date("7 jan 1997")},
    {name:'abhi',city:'ramnagar',id:103,salary:50000,dob:new Date("7 jan 1996")},
    {name:'rahul',city:'dharwad',id:104,salary:60000,dob:new Date("7 jan 1995")}

  ]

  constructor() { }

  ngOnInit(): void {
const observable = new Observable(sub=>{sub.next(Math.random())})

//1st listener
observable.subscribe(result=>{console.log(result);})
//2nd listener
observable.subscribe(result=>{console.log(result);})

const subject=new Subject()

//1st listener
subject.subscribe(result=>{console.log(result);})
//2nd listener
subject.subscribe(result=>{console.log(result);})

subject.next(Math.random())


  }

}

