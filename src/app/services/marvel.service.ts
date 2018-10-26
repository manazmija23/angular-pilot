import { Injectable } from '@angular/core';
import { IHero } from '../marvel/hero';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SuperHero } from '../form/hero-model';


@Injectable()

export class MarvelService {
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>('http://127.0.0.1:8000/api/heroes');
  }

  getSingleHero(id): Observable<IHero[]> {
    return this.http.get<IHero[]>('http://127.0.0.1:8000/api/heroes/' + id);
  }

  addHero(SHero: SuperHero) {
    return this.http.post<any>('http://127.0.0.1:8000/api/heroes', SHero);
  }

  deleteSingleHero(id: number): Observable<{}> {
    return this.http.delete('http://127.0.0.1:8000/api/heroes/' + id);
  }

  signup(data) {
    return this.http.post('http://127.0.0.1:8000/api/signup', data);
  }

  login(data) {
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }

}
