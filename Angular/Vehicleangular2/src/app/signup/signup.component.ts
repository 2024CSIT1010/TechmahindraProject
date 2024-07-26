import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = ''; // Add this property
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; // Add this property

  constructor(private authService: AuthService) {}

  signup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const success = this.authService.signup(this.email, this.password);
    if (success) {
      alert('Signup successful!');
    } else {
      alert('User already exists.');
    }
  }
}
