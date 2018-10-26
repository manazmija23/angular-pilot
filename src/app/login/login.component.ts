import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [
    trigger('animateState', [
      transition('inactive => active', animate(400)),
      state('inactive', style({opacity: 0, transform: 'translateY(-30px)'})),
      state('active', style({opacity: 1, transform: 'translateY(0px)'})),
    ])
  ]
})
export class LoginComponent implements OnInit {

  public state = 'inactive';

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private _MarvelService: MarvelService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }


  onSubmit() {
     this._MarvelService.login(this.form).subscribe(
       data => this.handleResponse(data),
      error => this.handleError(error));
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');

  }


  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
    setTimeout(() => {
      this.state = 'active';
    }, 250 );
  }

}
