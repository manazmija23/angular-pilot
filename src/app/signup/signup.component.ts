import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import {TokenService} from '../services/token.service';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  animations: [
    trigger('animateState', [
      transition('inactive => active', animate(400)),
      state('inactive', style({opacity: 0, transform: 'translateY(-30px)'})),
      state('active', style({opacity: 1, transform: 'translateY(0px)'})),
    ])
  ]
})

export class SignupComponent implements OnInit {

  public state = 'inactive';

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = [];

  constructor(
    private _MarvelService: MarvelService,
    private Token: TokenService,
    private router: Router
  ) { }

  onSubmit() {
     this._MarvelService.signup(this.form).subscribe(
       data => this.handleResponse(data),
      error => this.handleError(error));
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
    setTimeout(() => {
      this.state = 'active';
    }, 250 );
  }

}
