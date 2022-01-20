import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked{
@Input() value:any
interval:any
counter:number=0

@ContentChild('cHeader',{static:false})celement:any
  constructor() { 
    console.log('child constructor has been called');
    
  }

  ngOnInit(): void {

    console.log('child oninit has been called');
    // this.interval= setInterval(()=>{
    //      this.counter++
    //      console.log(this.counter);
         
    // },1000)
    
  }

  ngOnDestroy(): void {
      console.log('child component has been destroyed');
      // clearInterval(this.interval)
      
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log('child onchanges has been called');
    console.log(changes);
    
    }
    ngDoCheck(): void {
      console.log('child do check has been called');
      
  }
ngAfterContentInit(): void {
    console.log(' child ngafterContentInit has been called');
    console.log(this.celement);
    this.celement.nativeElement.innerText='shashi'       
}
ngAfterContentChecked(): void {
  console.log(' child aftercontentChecked has been called');
}

}
