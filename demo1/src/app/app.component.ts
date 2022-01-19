import { Component } from '@angular/core';
import { VirtualAction } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 flag:boolean=false
   change(){
     if(this.flag){
      this.flag=false
     }
     else{
       this.flag=true
     }
  }
users=[
{name:'Virat',age:40},
{name:'Rohit',age:41},
{name:'Shikhar',age:42},
{name:'Rahul',age:43} 
]

selectedCountry='ind'

  title = 'demo1';
}
