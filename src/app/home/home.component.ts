import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email:string=" ";
  name:string="";
 
  constructor(private authService: AuthService,public fire: AngularFireAuth,private router:Router) { 

    this.fire.authState.subscribe(auth=>{
      if(auth){
      
        this.email=auth.email;
        
      }
    })
  }

  ngOnInit() {
    
  }


}
