import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username = 'master@lemoncode.net';
  private password = '12345678';
  public $isLoggedFlag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    localStorage.getItem('isLogged') === 'true' ? this.$isLoggedFlag.next(true) : this.$isLoggedFlag.next(false);
  }

  login(username: string, password: string):  Observable<boolean> {
    if(username === this.username && password === this.password){
      this.$isLoggedFlag.next(true);
      localStorage.setItem('isLogged', 'true');
      return of(true).pipe( delay(2000) );
    } else {
      return of(false).pipe( delay(2000) );
    }
  }

  logout(): void{
    localStorage.removeItem('isLogged');
    this.$isLoggedFlag.next(false);
  }

  getUsername(): string{
    return this.$isLoggedFlag.getValue() ? this.username : '';
  }
}
