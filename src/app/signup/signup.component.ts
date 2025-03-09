import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  newUsername: string = '';
  newpassword: string = '';

  constructor(private router: Router, private userService: UserService) {}

  // פונקציה עבור מעבר לדף ה-login
  MoveToLogin() {
    this.router.navigate(['/login']);
  }

  // פונקציה לשמירת המשתמש החדש במערך
  saveUser() {
    if (this.newUsername && this.newpassword) {
      const newUser = { username: this.newUsername, password: this.newpassword };

      // קריאה לשירות על מנת לשמור את המשתמש
      this.userService.saveUser(newUser).subscribe(response => {
        if (response.success) {
          console.log('User signed up successfully!', response);
          alert('User registered successfully!');
          
          // לאחר שמירת המשתמש, נוודא שהוא מועבר לדף ה-login
          this.MoveToLogin();
        } else {
          alert('Error registering user.');
        }
      });
    } else {
      alert('Please enter both username and password.');
    }
  }
}
