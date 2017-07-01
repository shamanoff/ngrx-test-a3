import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class DbService {


  constructor(private _http: Http) {
  }
  fetchData() {
    return this._http.get('../assets/data.json').map(
      (res) => res.json()
    );

  }

}
