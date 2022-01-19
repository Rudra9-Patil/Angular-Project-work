import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'user',component:UserDashboardComponent,canActivate:[AuthGuard]},
  {path:'**',component:LoginComponent},//if u give other path than specified it goes to the given component


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
