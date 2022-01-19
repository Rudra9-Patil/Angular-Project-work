import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationlocalDBVal=localStorage.getItem('itemsSetEmail')

  registrationForm= new FormGroup({
    uname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    pass:new FormControl("",[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
  })
  get uname(){
    return this.registrationForm.get('uname')
  }
  
  get pass(){
    return this.registrationForm.get('pass')
    
  }
  
  registration(){
    console.log(this.registrationForm.value);
    console.log(this.registrationForm.value.uname);

    localStorage.setItem('itemsSetEmail',JSON.stringify(this.registrationForm.value.uname))
    localStorage.setItem('itemsSetPass',JSON.stringify(this.registrationForm.value.pass)) 
   this.registrationlocalDBVal=localStorage.getItem('itemsSetEmail')
     
  }
  
  clearDB(){
    localStorage.clear()
    this.registrationlocalDBVal=localStorage.getItem('itemsSetEmail')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
