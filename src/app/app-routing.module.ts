import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthService } from './auth.service';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { ReviewComponent } from './review/review.component';
import { RoleService } from './role.service';
import { UserComponent } from './user/user.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:"", component:LandingpageComponent } , {path:'home' , component:HomeComponent , canActivate:[RoleService ] } , {path:"addmovies" , component:AddmoviesComponent ,canActivate:[RoleService ] } ,{path:"review" , component:ReviewComponent , canActivate:[AuthService ] } ,{path:"user" , component:UserComponent ,canActivate:[AuthService ] } ,{path:"update", component:UpdateComponent , canActivate:[RoleService ]} ] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
