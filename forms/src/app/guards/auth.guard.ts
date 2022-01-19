import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private values:AuthService){}
  canActivate(){
    if(this.values.onLogin()){
      return true;
     }
     else{
      return false;
     }
       
  }
    
  }
  
  

