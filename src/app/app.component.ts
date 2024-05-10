import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UsersListComponent } from "../components/users-list/users-list.component";
import { CreateUserComponent } from "../components/create-user/create-user.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UsersListComponent, CreateUserComponent, RouterModule]
})
export class AppComponent {
  title = 'Users list';
}
