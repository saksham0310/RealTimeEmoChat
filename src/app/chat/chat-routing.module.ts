import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from '../authentication/auth.guard';
import { ChatRoomListComponent } from './components/chat-room-list/chat-room-list.component';
import { CreateNewRoomComponent } from './components/create-new-room/create-new-room.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

const routes: Routes = [
  {path:'chat',component:ChatRoomListComponent,canActivate:[authGuard]},
  {path:'create-room',component:CreateNewRoomComponent,canActivate:[authGuard]},
  {path:'chat-room/:id',component:ChatRoomComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
