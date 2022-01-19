import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
salesProducts=[
  {name:'laptop',price:40000},
  {name:'mobile',price:10000},
  {name:'television',price:50000},
  {name:'printer',price:9000}
]
newProducts=[
  {name:'book',price:50},
  {name:'pen',price:10},
  {name:'pad',price:60},
  {name:'ink',price:30}
]
  constructor() { }

  ngOnInit(): void {
  }





}
