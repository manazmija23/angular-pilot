import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarvelService} from '../services/marvel.service';
import {trigger, style, transition, animate, keyframes, query, stagger, state} from '@angular/animations';



@Component({
  selector: 'app-marvel-single-component',
  templateUrl: './marvel-single-component.component.html',
  animations: [
    trigger('animateState', [
      transition('inactive => active', animate(200)),
      state('inactive', style({opacity: 0, transform: 'translateX(230px)'})),
      state('active', style({opacity: 1, transform: 'translateX(0px)'})),

    ])
  ]
})


export class MarvelSingleComponentComponent implements OnInit {

  public state = 'inactive';
  singleHero: Object;

  constructor(private _marvelService: MarvelService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.singleHero = params.id);

    setTimeout(() => {
      this.state = 'active';
    }, 200 );
  }

  ngOnInit() {
    this._marvelService.getSingleHero(this.singleHero).subscribe(
      data => this.singleHero = data
    );
  }

}
