import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ChatRoom } from '../models/chat';
import { Observable, combineLatest, map, of, switchMap} from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private fb:AngularFirestore,private route:Router, private snackBar:MatSnackBar,private auth:AuthService) { }

 getAllChatRoom():Observable<ChatRoom[]>
 {
  const currentUser=this.auth.currentUser;
  // return this.fb.collection<ChatRoom>('chatRooms').valueChanges();
  const query1$=this.fb.collection<ChatRoom>('chatRooms',ref=>ref.where('users','array-contains',currentUser)).valueChanges();
  const query2$=this.fb.collection<ChatRoom>('chatRooms',ref=>ref.where('createdBy','==',currentUser)).valueChanges();
  return combineLatest([query1$,query2$]).pipe(
    map(([result1,result2])=>{
      return [...result1,...result2];
    })
  )
 }

  addnewRoom(room:ChatRoom):Promise<void>{
    const ID=this.fb.createId();
    room.id=ID;
    return this.fb.collection<ChatRoom>('chatRooms').doc(ID).set(room).then(()=>{
      this.route.navigate(['/v1/chat']);
    })
    .catch(error=>{
      this.snackBar.open('Error while creaing room','Close',{
        duration: 5000,
        horizontalPosition: 'center',  // Center horizontally for better visibility
        verticalPosition:'top',       // Move to top for immediate visibility
        panelClass: ['custom-error-style']  // Use custom styles
      })
      
  console.log("Error while creaing room",error);
    })
  }

  removeRoom(id:string):Promise<void>{
    return this.fb.collection<ChatRoom>('chatRooms').doc(id).delete()
    .then(()=>{
      this.snackBar.open('Successful delete','Close');
      console.log("Successfully deleted");
    })
    .catch((error)=>{
      this.snackBar.open('Error while creaing room','Close',{
        duration: 5000,
        horizontalPosition: 'center',  // Center horizontally for better visibility
        verticalPosition:'top',       // Move to top for immediate visibility
        panelClass: ['custom-error-style']  // Use custom styles
      })
  console.log("Error while deleting room",error);
    })
  }
  
}
