import { Component } from '@angular/core';
import { User } from '../../app/user';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from '../../app/services/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  constructor(private myService: MyServiceService, private router: Router) {}

  user: User = new User();

  saveUser() {
    this.myService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUserList();
    },
      error => console.log(error));
  }

  goToUserList() {
    this.router.navigate(["/users"]);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
