import { Injectable } from '@angular/core';
import { Hero } from './../models/hero';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export const host: string = 'https://api.opendota.com';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    const requestURL = `${host}/api/heroStats`;   
    return this.http.get<Hero[]>(requestURL);
  }

}
