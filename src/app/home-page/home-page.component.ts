import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  animations: [
    trigger('animateState', [
      transition('inactive => active', animate(400)),
      state('inactive', style({opacity: 0, transform: 'translateY(-30px)'})),
      state('active', style({opacity: 1, transform: 'translateY(0px)'})),
    ])
  ]
})

export class HomePageComponent implements OnInit {

  public state = 'inactive';

  constructor() {
    setTimeout(() => {
      this.state = 'active';
    }, 250 );
  }

  ngOnInit() {
  }

}
