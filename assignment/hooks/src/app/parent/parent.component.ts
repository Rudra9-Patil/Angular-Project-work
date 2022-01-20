import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit,AfterViewChecked{
  flag:boolean=true
  value:any
  toggleChild(){
    this.flag=!this.flag
  }
@ViewChildren('value3')test:QueryList<any>|any
  constructor() {
    console.log('parent constructor has beeen called');
    
   }

  ngOnInit(): void {
    console.log('parent onit has been called');
    
  }
  ngAfterViewInit(): void {
      console.log(' parent ngAfterViewInit has been called');
      
  }
ngAfterViewChecked(): void {
    console.log('parent ngAfterViewChecked has been called');
    console.log(this.test);
    
    
}
}
