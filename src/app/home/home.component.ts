import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userLogs: any;
  userId: any;
  token: any;

  constructor(private userService: UserService) {
    this.token = this.userService.getTokenUser();

    this.userService.getUserByToken(this.token).subscribe(response => {
      this.userId = response.userId;
      console.log(this.userId);

      this.userService.getAllUserLogs(this.userId).subscribe(response => {
        this.userLogs = response;
        console.log(this.userLogs);
      });
    });
  }

}
