import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import{Router} from '@angular/router';
import { MovieService } from './movie.service';
@Injectable({
  providedIn: 'root'
})
export class RoleService {
rolecheck:any
  constructor(private auth : MovieService, private router:Router) { }
  canActivate(): boolean  {
    this.rolecheck= localStorage.getItem("role")
    if(this.rolecheck == "admin"){
      
      return true;
  }
  else{
  this.router.navigate([""]);
    return false;
    
  }
  }
}
