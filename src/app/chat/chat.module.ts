import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { RouterModule } from '@angular/router';
import { ChatRoomListComponent } from './components/chat-room-list/chat-room-list.component';
import { CreateNewRoomComponent } from './components/create-new-room/create-new-room.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatRoomListComponent,
    CreateNewRoomComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
