import { Component } from '@angular/core';
import { User } from '../../app/user';
import { CommonModule } from '@angular/common';
import { MyServiceService } from '../../app/services/my-service.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  
  users: User[] = [];

  constructor (private myService: MyServiceService) {}

  ngOnInit():void {
    this.getUsers();
  }

  private getUsers() {
    this.myService.getUsersList().subscribe(data => {
      this.users = data;
    })
  }
}
