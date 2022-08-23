import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  isLogged = false;

  constructor( private _authService : AuthService) {
    this._authService.$isLoggedFlag.subscribe(x => x === true ? this.isLogged = true : this.isLogged = false);
  }



}
