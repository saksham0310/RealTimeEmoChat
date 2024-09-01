import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{

  reset!:FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService,private route:Router){}

ngOnInit(): void {
  this.reset=this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]] 
    }
  )
}

resetEmail():void
{
  const {email} =this.reset.value;
  this.auth.resetPassword(email);
}

}
