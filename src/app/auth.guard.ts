import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MasterService } from './service/master.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private masterService: MasterService, private router: Router) {}

  canActivate(): boolean{
    if (this.masterService.loggedIn()){
      return true
    } else {
      this.router.navigate(['/'])
      return false
    }
  }
  
}
