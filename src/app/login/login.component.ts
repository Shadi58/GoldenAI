import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent {
  username:string=''
  password:string=''
  notExistEmail:boolean= false
  errorMsg ='There Is No Account Like This'
  Users = [
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
  constructor( private router:Router){}
  MoveToSignUp(){
    this.router.navigate(['/signup'])
  }
  checkLogIn() {


    const user = this.Users.find(u => u.username === this.username && u.password === this.password);
  
    if (user) {
        console.log('✅ User exists');
        this.router.navigate(['/goldgraph']);
    } else {
      this.notExistEmail=true
    }
}

}
