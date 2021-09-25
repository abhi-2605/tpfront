import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import{Router} from '@angular/router';
import { MovieService } from './movie.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : MovieService, private router:Router) { }

  canActivate(): boolean  {
    if(this.auth.loggedin()){
      
      return true;
  }
  else{
   this.router.navigate([""]);
    return false;
  }
  }
}
