import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  val="Technoelevate"
  isSpecial:boolean=true
  c1='blue'
  c2='green'
  colVal=2
  display(){
    console.log('inside the display function');
    
  }
  displayResult=''

}
