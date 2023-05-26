import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit{
  token?: string;
  userId?: number;
  userLogs: any;
  public logsPage!: number;
  showTable = true;

  constructor (private userService: UserService) {}

  ngOnInit() {
    this.token = this.userService.getTokenUser();

    this.userService.getUserByToken(this.token).subscribe(response => {
      this.userId = response.userId;

      this.userService.getAllUserLogs(this.userId).subscribe(response => {
        this.userLogs = response;
        if (this.userLogs.length == 0) {
          this.showTable = false;
        }
      });
    });
  }

}
