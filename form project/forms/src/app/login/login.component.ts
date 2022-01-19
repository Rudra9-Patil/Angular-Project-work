import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    uname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    pass:new FormControl("",[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
  })
  get uname(){
    return this.loginForm.get('uname')
  }
  
  get pass(){
    return this.loginForm.get('pass')
    
  }
  
  login(){
    localStorage.setItem('loginEmailVal',JSON.stringify(this.loginForm.value.uname))
    localStorage.setItem('loginPassVal',JSON.stringify(this.loginForm.value.pass))
  }
  
  clearDB(){
    localStorage.clear()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
