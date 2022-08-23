import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginValid = true;
  public username = '';
  public password = '';
  spinner = false;
  logged : boolean = false;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {
    this._authService.$isLoggedFlag.subscribe(x=> x === true ? this.logged = true : this.logged = false);
  }

  public ngOnInit(): void {
    this.logged === true ? this._router.navigate(['/dashboard']) : null;
  }

  public onSubmit(): void {
    this.spinner = true;
    this._authService.login(this.username, this.password).subscribe(
      (data) => {
        this.spinner = false;
        if(data === true){
        this._router.navigate(['/dashboard']);
        } else {
          this.loginValid = false;
        }
      }
    );

  }
}
