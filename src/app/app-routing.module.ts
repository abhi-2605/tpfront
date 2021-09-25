import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthService } from './auth.service';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [{path:"", component:LandingpageComponent } , {path:'home' , component:HomeComponent , canActivate:[AuthService ] } , {path:"addmovies" , component:AddmoviesComponent } ,{path:"review" , component:ReviewComponent}] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
