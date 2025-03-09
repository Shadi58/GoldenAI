import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  users = [
    { username: 'shadi20', password: 'pass123' },
    { username: 'ahmad_dev', password: 'dev456' },
    { username: 'noor_123', password: 'noor789' },
    { username: 'mohammad_a', password: 'securePass1' },
    { username: 'rana_k', password: 'rana2024' },
    { username: 'ali_coder', password: 'aliPass99' },
    { username: 'sara_q', password: 'saraSecure' },
    { username: 'hassan_t', password: 'hassanPass' },
    { username: 'leen_w', password: 'leen987' },
    { username: 'omar_x', password: 'omarStrong' },
    { username: 'majd_f', password: 'majdPassword' },
    { username: 'hala_m', password: 'halaSecret' },
    { username: 'yousef_z', password: 'yousefSafe' }
  ];

  constructor() {}

  saveUser(user: any): Observable<any> {
    // בדיקה אם המשתמש כבר קיים
    const existingUser = this.users.find(u => u.username === user.username);
    if (existingUser) {
      return of({ success: false, error: 'Username already exists' });
    }

    this.users.push(user);
    return of({ success: true, user });
  }

  getUser(username: string): Observable<any> {
    const user = this.users.find((u) => u.username === username);
    return of(user ? user : { error: 'User not found' });
  }

  getAllUsers(): Observable<any[]> {
    return of(this.users);
  }
}
