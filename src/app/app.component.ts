import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from "../components/users-list/users-list.component";
import { CreateUserComponent } from "../components/create-user/create-user.component";
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UsersListComponent, CreateUserComponent]
})
export class AppComponent {
  title = 'Estudiantes';
}
