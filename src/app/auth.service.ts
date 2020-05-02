import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  checkFlag = () =>{
    const flag = localStorage.getItem("canLogin");
    if(flag){
      return true
    }
    return false;
  }

  isLoggedIn = new Subject<boolean>();
  constructor() {
  }


  logIn = () => {
    localStorage.setItem("canLogin","true");
    this.isLoggedIn.next(true);
  }

  logOut = () => {
    localStorage.removeItem("canLogin");
    this.isLoggedIn.next(false);
  }

}
