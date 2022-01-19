import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
result:string=''
getData(value:string){
this.result=value
}
result1:string=''
getWish(value1:string){
  this.result1=value1
}

  constructor() { }

  ngOnInit(): void {
  }

}
