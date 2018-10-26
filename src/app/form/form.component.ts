import { Component, OnInit } from '@angular/core';
import {SuperHero} from './hero-model';
import {MarvelService} from '../services/marvel.service';

@Component({
  selector: 'app-fom',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  heroModel = new SuperHero('Add new Hero', 'Hero Description...');
  isShowing: boolean = false;

  constructor(private _marvelService: MarvelService ) {}

  ngOnInit() {
  }

  onSubmit() {
    this._marvelService.addHero(this.heroModel).subscribe(data => this.heroModel = data);

  }

  showMessage() {
    this.isShowing = true;

    setTimeout(() => {
      this.isShowing = false;
    }, 2000);

    }

}
