import {Component, Input, OnInit} from '@angular/core';
import {IHero} from './hero';

import {MarvelService} from '../services/marvel.service';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  animations: [
    trigger('heroesStagger', [
      transition('* <=> *', [
        query(':enter', [
          style({opacity: 0, transform: 'translateY(-80px)'}),
          stagger('100ms',
            animate('400ms ease-out',
              style({opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true}),
      ])
    ])
  ]
})


export class MarvelComponent implements OnInit {

  public heroes = [];
  hideme = [];


  constructor(
    private _marvelService: MarvelService,

  ) {
  }

  ngOnInit() {
    this._marvelService.getHeroes()
      .subscribe(data => this.heroes = data);
  }

  onDelete(hero: IHero) {
    this._marvelService.deleteSingleHero(hero.id)
      .subscribe();
    const index = this.heroes.indexOf(hero);
    this.heroes.splice(index, 1);
  }


}
