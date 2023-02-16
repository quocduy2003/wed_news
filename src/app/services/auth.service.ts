import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth
  ) { }
  currentUser !: User|null;
  public async loginInGoogle() {
    return await signInWithPopup(this.auth,new GoogleAuthProvider());
  }
  logout(){
    this.auth.signOut();
  }

}
