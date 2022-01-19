import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() value1:any
  constructor() { }

  ngOnInit(): void {
  }

}
