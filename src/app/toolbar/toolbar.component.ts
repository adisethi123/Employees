import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  isLoggedIn = false;
  constructor(
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe(didActivate => {
      this.isLoggedIn = didActivate;
    });
  }

  onLogout = () =>{
    this.auth.logOut();
    this.router.navigate(['login']);
  }

}
