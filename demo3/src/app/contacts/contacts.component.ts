import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contactForm=new FormGroup({
  firstName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-z]+$')]),
  lastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-z]+$')]),
  city: new FormControl('',[Validators.required]),
  age: new FormControl('',[Validators.required]),
  check:new FormControl('',[Validators.required])
})

get firstName(){
  return this.contactForm.get('firstName')
}

get lastName(){
  return this.contactForm.get('lastName')
}

get city(){
  return this.contactForm.get('city')
}
get state(){
  return this.contactForm.get('state')
}

get check(){
  return this.contactForm.get('check')
}

contact(){
  console.log(this.contactForm);
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
