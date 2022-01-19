import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route:Router,private authser:AuthService){}
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
if(this.authser.onLogin()===true){
  this.route.navigate(['user'])
  window.alert('login successful')
}
else{
window.alert('login details are not valid')
}

  }
  
  clearDB(){
    localStorage.clear()
  }

  
  ngOnInit(): void {
  }

}
