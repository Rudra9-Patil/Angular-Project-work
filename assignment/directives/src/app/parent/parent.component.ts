import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  displayName=false
  // color='red'
  fruitsProducts=[
    {name:'apple',price:150},
    {name:'banana',price:35},
    {name:'jackfruit',price:50},
    {name:'peru',price:40}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
