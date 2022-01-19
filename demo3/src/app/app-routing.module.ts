  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './guards/auth.guard';
import { UnsavedGuard } from './guards/unsaved.guard';


const routes: Routes = [
  {path:'',redirectTo:'about',pathMatch:'full'},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutusComponent},
  {path:'login',component:LoginComponent,canDeactivate:[UnsavedGuard]},
  {path:'registration',component:RegistrationComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'**',component:AboutusComponent},//if u give other path than specified it goes to the given component
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
