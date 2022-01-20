import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataBinding';
  val='Rudragouda patil'
  isDisabled=true
  successClass='text-special'
  isSpecial=true
  c1='blue'
  c2='yellow'
  titleStyle= {
    color:'green',
    fontStyle:'italic'
  }
  greeting=''
  
  onClick(event:any){
    console.log(event);
    this.greeting=event.type
  }
logMessage(value:any){
  console.log(value);
}
name=''

}
