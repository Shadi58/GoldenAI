import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( private router:Router){}
  MoveTologin(){
    //check if the user exist in db (user table ) if not cant continue 
    this.router.navigate(['/login'])
  }
  MoveToViewPredection(){
    this.router.navigate(['/goldgraph'])
  }
  MoveToGoldAnalysis(){
    this.router.navigate(['/goldanalysis'])
  }

}
