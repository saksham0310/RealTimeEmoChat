import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginPage!:FormGroup;
  passwordType:string='password';

  constructor(private fb:FormBuilder,private auth:AuthService) {}

  ngOnInit():void{
    this.loginPage=this.fb.group({
      email:['',[Validators.required, Validators.email]], 
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  submit():void{
    if(this.loginPage.valid) 
      {
      const{email,password}=this.loginPage.value;
      this.auth.login(email, password);
      }
    }

    togglePasswordVisibility(){
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    }

}
