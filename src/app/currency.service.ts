import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { catchError, map, tap } from 'rxjs/operators';
import { Rate } from './rate';

@Injectable()
export class CurrencyService {
  constructor(private http: Http) {}

  getRates(base:string): Observable<Rate[]> {
    let apiUrl = `https://api.fixer.io/latest`;
    let RATES = [];
    apiUrl = `${apiUrl}?base=${base}`;

    return Observable.fromPromise(fetch(apiUrl)
      .then(res => res.json())
      .then(data => data.rates));
  };
}