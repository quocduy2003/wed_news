import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { onAuthStateChanged } from '@firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private auth:Auth,public authService:AuthService,private router:Router){}
  ngOnInit(): void {
    onAuthStateChanged(this.auth,(user)=>{
      if(user){
        this.authService.currentUser=user;
        this.router.navigate([`\home`]);
      }
      else{
        this.authService.currentUser=null;
      }
    })
  }
}
