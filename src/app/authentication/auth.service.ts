import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<firebase.User|null>;
  currentUser:string|null=null;

  constructor(private afAuth:AngularFireAuth, private route:Router, private snackBar:MatSnackBar) { 
    this.user$=this.afAuth.authState;
    this.user$.subscribe((user=>{
      if(user)
        {
          this.currentUser=user.email;
        }
    }))
  }

  register(email:string,password:string):Promise<void>{
   return this.afAuth.createUserWithEmailAndPassword(email,password)
    .then(()=>{
      this.route.navigate(['/login']);
      })
    .catch(error=>{
      this.snackBar.open('Register Fail','Close',{
        duration: 5000,
        horizontalPosition: 'right',  // Center horizontally for better visibility
        verticalPosition: 'top',       // Move to top for immediate visibility
        panelClass: ['custom-error-style']  // Use custom styles
      })
      alert("Register fail");
      console.log("Register fail",error);
    })
  }

  login(email:string,password:string):Promise<void>{
    return this.afAuth.signInWithEmailAndPassword(email,password)
    .then(() => {
      this.currentUser=email;
      console.log('Login success');
      this.route.navigate(['v1/chat']);
    })
      .catch(error=>{
        this.snackBar.open('Login Fail','Close',{
          duration: 5000,
          horizontalPosition: 'right',  // Center horizontally for better visibility
          verticalPosition:'top',       // Move to top for immediate visibility
          panelClass: ['custom-error-style']  // Use custom styles
        })
        console.log("login fail",error);
      })
  }

  logout():Promise<void>{
    return this.afAuth.signOut()
      .then(()=>{
        this.route.navigate(['/auth/login']);
      })
    .catch((error)=>{
      console.log("logout fail",error)
    })
  }

  resetPassword(email:string):Promise<void>{
    return this.afAuth.sendPasswordResetEmail(email)
    .then(()=>{
    this.route.navigate(['auth/login'])
    alert("Email sent");
    })
    .catch(error=>{
      console.log("email not sent",error)
      alert("Email not sent");
    })
  }
}
