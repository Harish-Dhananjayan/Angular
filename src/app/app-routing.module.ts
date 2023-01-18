import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent,
  children:[
    {path:"add",component:AddcontactComponent},
    {path:"edit/:id",component:AddcontactComponent},
  ]},
  {path:"access",loadChildren:()=>import('./access/access.module').then(otp=>otp.AccessModule)},
  {path:"login",loadComponent:()=>import('./login/login.component').then(otp=>otp.LoginComponent)},
  {path:"**",component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
