import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  changePassword() {
    if (this.newPassword === this.confirmPassword) {
      const success = this.authService.changePassword(this.currentPassword, this.newPassword);
      if (success) {
        alert('Password changed successfully!');
      } else {
        alert('Current password is incorrect.');
      }
    } else {
      alert('Passwords do not match!');
    }
  }
}
