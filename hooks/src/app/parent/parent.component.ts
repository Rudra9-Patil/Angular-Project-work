import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit,AfterViewChecked{

flag:boolean=true
uname:any
toggleChild(){
  this.flag=!this.flag
}
 @ViewChild('value3',{static:false}) test:ElementRef<any>|any
// @ViewChildren('value3') test:QueryList<any>|any
  constructor() {
    console.log(' parent constructor has been called');
    
   }

  ngOnInit(): void {
    console.log('parent oninit has been called');
    
  }

  ngAfterViewInit(): void {
      console.log('parent after viewinit has been called');
     
  }
ngAfterViewChecked(): void {
    console.log('parent after view checked has been called');
    console.log(this.test);    
    this.test.nativeElement.innerText='kiran'
}

}
