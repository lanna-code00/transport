import { ManagerdashboardprofileComponent } from './Adminfolder/managerdashboardprofile/managerdashboardprofile.component';
import { ManagerdashboardComponent } from './Adminfolder/managerdashboard/managerdashboard.component';
import { LoginAdminComponent } from './Adminfolder/login-admin/login-admin.component';
import { MaindashboardComponent } from './MainAdmin/maindashboard/maindashboard.component';
import { SignupComponent } from './MainAdmin/Registerfolder/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: 'signupmanager', redirectTo: 'registerworkers', pathMatch: 'full'},
  {path: 'executivedashboard', component: MaindashboardComponent, children: [
    {path: '', redirectTo: "signupmanager", pathMatch:'full'},
    {path: 'signupmanager', component: SignupComponent},
  ]},

  // Admin/manager routes
  {path: 'managerlogin', component: LoginAdminComponent},
  {path: 'managersidenav', component: ManagerdashboardComponent, children: [
    {path: '', redirectTo: "managerdashboard", pathMatch:'full'},
    {path: 'managerdashboard', component: ManagerdashboardprofileComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
