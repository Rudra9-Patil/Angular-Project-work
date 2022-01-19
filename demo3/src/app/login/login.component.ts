import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm= new FormGroup({
  uemail:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
  upass:new FormControl("",[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
})
get uemail(){
  return this.loginForm.get('uemail')
}

get upass(){
  return this.loginForm.get('upass')
  
}

login(){
  console.log(this.loginForm.value);
  
}


  constructor() { }

  ngOnInit(): void {
  }

}
