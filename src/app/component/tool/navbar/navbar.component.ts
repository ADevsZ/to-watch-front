import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLoggedIn$: any;
  nickName: string = "";

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.userService.getNickName().subscribe(response => {
      this.nickName = response.nick;
    });
  }
  
  ngOnInit() { }

  onLogout() {
    this.authService.logout();
  }

}
