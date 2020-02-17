import { Fruit } from './fruit';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

const BASE_URL = 'http://fruityvice.com/api'

import * as uuid from 'uuid/v1';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  model = 'fruit/all';

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      map(
        (result: any[]) => result.map(
          (res, index) => ({id: ++index, ...res})
        )
      )
    );
  }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }


  create(fruit: Fruit) {
    console.log(fruit);
    // delete fruit.id;
    return of(({ id: uuid(), ...fruit}));
  }

  delete(fruit: Fruit) {
    return this.httpClient.delete(this.getUrlForId(fruit.id));
  }

  update(fruit: Fruit) {
    return this.httpClient.put(this.getUrlForId(fruit.id), fruit);
  }
}
