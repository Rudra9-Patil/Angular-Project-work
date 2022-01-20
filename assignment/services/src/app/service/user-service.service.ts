import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  getData(){
    return[
      {name:'harish',department:'development',id:101},
      {name:'shivam',department:'development',id:102},
      {name:'pratik',department:'development',id:103}

    ]
  }

  constructor() { }
}
