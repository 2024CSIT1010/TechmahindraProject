// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('appData', JSON.stringify({ users: [{ email: this.username, password: this.password, role: 'admin' }] }));
      this.router.navigate(['/admin']); // Redirect to Admin Dashboard
    } else if (this.username === 'user' && this.password === 'user') {
      localStorage.setItem('appData', JSON.stringify({ users: [{ email: this.username, password: this.password, role: 'user' }] }));
      this.router.navigate(['/user']); // Redirect to User Dashboard
    } else {
      alert('Invalid credentials');
    }
  }
}
