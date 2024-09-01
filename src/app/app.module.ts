import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthenticationModule } from './authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthenticationModule,
    AppRoutingModule,
    ChatModule,
    RouterModule,
    BrowserAnimationsModule, // Required for animations
    MatSnackBarModule        // Snackbar for error messages
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
