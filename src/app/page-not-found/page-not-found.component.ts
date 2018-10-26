import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, state, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  animations: [
    trigger('animateState', [
      transition('inactive => active', animate(400)),
      state('inactive', style({opacity: 0, transform: 'translateY(-30px)'})),
      state('active', style({opacity: 1, transform: 'translateY(0px)'})),

    ])
  ]
})

export class PageNotFoundComponent implements OnInit {

  public state = 'inactive';

  constructor() {
    setTimeout(() => {
      this.state = 'active';
    }, 250 );
  }

  ngOnInit() {
  }

}
