import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-create-new-room',
  templateUrl: './create-new-room.component.html',
  styleUrls: ['./create-new-room.component.css']
})
export class CreateNewRoomComponent implements OnInit {

  roomForm!:FormGroup;
  users!:string[]

  constructor(private fb:FormBuilder,private chatService:ChatService,private username:AuthService){}

  ngOnInit(): void {
  this.roomForm=this.fb.group({
    name:['',Validators.required],
    description:['',Validators.required],
    email:[''],
  })  
  }

  CreateRoom():void{
    if(this.roomForm.valid)
    {
      const{name,description,email}=this.roomForm.value;
      this.users=email.split(',').map((user:string)=>user.trim().toLowerCase())
      this.chatService.addnewRoom({
        name:name,
        description:description,
        createdAt: new Date(),
        createdBy:this.username.currentUser,
        id: '',
        users:this.users
      })
    }
  }

}
