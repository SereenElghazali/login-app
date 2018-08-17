import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') form: any;
  email:string="";
  password:string="";
  username:string="";

  constructor(private authService: AuthService,
    private router:Router) { 
    
  }

  ngOnInit() {
  }
  onSubmit() {
    if(this.form.valid) {
      this.authService.signup(this.email, this.password);
      this.router.navigate(['home']);
       this.form.reset();
       } else {
      console.log('Invalid Form ');
     }

    
   }
}

