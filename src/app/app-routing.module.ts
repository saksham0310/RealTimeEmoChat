import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './authentication/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:"/auth/sign-up",pathMatch:'full'},
  {path:'auth',loadChildren:()=>import('./authentication/authentication-routing.module').then(m=>m.AuthenticationRoutingModule)},
  {path:'v1',loadChildren:()=>import('./chat/chat-routing.module').then(m=>m.ChatRoutingModule),canActivate:[authGuard]}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
