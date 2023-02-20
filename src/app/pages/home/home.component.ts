import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/news.model';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  news$: Observable<News[]> ;
  constructor(public authService:AuthService,private auth:Auth,private router:Router,private newsService:NewsService){

    this.news$ = this.newsService.get();
  }
  

  ngOnInit(): void {
    onAuthStateChanged(this.auth,(user)=>{
      if(!user){
        this.authService.currentUser=user;
        this.router.navigate([``]);
      }
    })
  }
}
