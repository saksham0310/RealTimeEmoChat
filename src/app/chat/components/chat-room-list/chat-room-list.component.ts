import { Component, OnInit } from '@angular/core';
import { ChatRoom } from '../../models/chat';
import { ChatService } from '../../services/chat.service';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-chat-room-list',
  templateUrl: './chat-room-list.component.html',
  styleUrls: ['./chat-room-list.component.css']
})
export class ChatRoomListComponent implements OnInit {
  chatRooms: ChatRoom[] = [];
  showList: boolean = true;

  constructor(private chatService: ChatService, private auth:AuthService) {}

  ngOnInit(): void {
    this.fetchAllData();
  }

  fetchAllData(): void {
    this.chatService.getAllChatRoom().subscribe(rooms => {
      this.chatRooms = rooms;
      this.showData();
    });
  }
  
  showData(): void {
    this.showList = this.chatRooms.length === 0;
  }

  Logout():void{
    this.auth.logout();
  }

  deleteRoom(id:string,createdBy:string|null):void{
    if(createdBy==this.auth.currentUser)
    {
    this.chatService.removeRoom(id);
    }
    else{
      alert('Owner of the room can only delete this room');
    }
  }
  
}
