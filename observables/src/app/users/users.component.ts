import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
  count=0
  mySub:any
  constructor() { }

  ngOnInit(): void {
    const promises=new Promise(resolve=>{
      console.log('promises has been called');
      
      setTimeout(()=>{
        resolve('data from promise')
        resolve('data 1 from promise') //second difference
        resolve('data 2 from promise')

      },1000)
    })
    //listenin to the promises
    promises.then(result=>{console.log(result);
    })

    //observables
    const observables= new Observable(sub=>{
      // console.log('observables has been called');//first diffrence
    
      

      setInterval(()=>{

          sub.next(this.count++)
        // console.log('data from observables' +this.count);
        
        // sub.next('data from observables')
        // sub.next('data 1 from observables')
        // sub.next('data 2 from observables')
      },1000)
    })
    //listening to the observable


    this.mySub=observables.subscribe(result=>{console.log(result);
    })

  }
ngOnDestroy(): void {
    this.mySub.unsubscribe()
}  

}
