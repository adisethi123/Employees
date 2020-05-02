import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  navigationAllowed : boolean


  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.navigationAllowed =  this.authService.checkFlag();
      if(this.navigationAllowed == true){
        this.authService.isLoggedIn.next(true);
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;
      }
  }
  
}