import { Component } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss'
})
export class UpdateProfileComponent {
  user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  };
}
