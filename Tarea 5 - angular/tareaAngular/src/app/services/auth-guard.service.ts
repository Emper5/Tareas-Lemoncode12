import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  isLogged: boolean = false;

  constructor(private _authService : AuthService,
              private _router : Router
              ) {
                this._authService.$isLoggedFlag.subscribe(x => x === true ? this.isLogged = true : this.isLogged = false);
              }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.isLogged){
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }



}
}
