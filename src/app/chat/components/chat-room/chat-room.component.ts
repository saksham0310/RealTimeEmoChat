import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {

  constructor(private router:Router){}
  backToHomePage():void{
    this.router.navigateByUrl('/v1/chat');
  }
}
