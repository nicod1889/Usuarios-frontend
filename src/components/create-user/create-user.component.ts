import { Component } from '@angular/core';
import { User } from '../../app/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  user: User = new User();

  onSubmit() {
    console.log(this.user);
  }
}
