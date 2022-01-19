import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  constructor(private user:UserServiceService) { }
  values:any
  // result:any
  // value1:any
  // id1:string='TY'
  
  // createEmpid(){

  // }
  
  

  ngOnInit(): void {
    this.values=this.user.getData()
  }

}
