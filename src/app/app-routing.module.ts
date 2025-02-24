import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GoldgraphComponent } from './goldgraph/goldgraph.component';
import { SignupComponent } from './signup/signup.component';
import { GoldanalysisComponent } from './goldanalysis/goldanalysis.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'goldgraph',component:GoldgraphComponent},
  {path:'signup',component:SignupComponent},
  {path:'goldanalysis',component:GoldanalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
