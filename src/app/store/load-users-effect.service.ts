import { Injectable } from '@angular/core';
import {DbService} from '../services/db.service';
import {Actions, Effect} from '@ngrx/effects';
import {LOAD_USERS_ACTION, LoadedUsersAction} from './actions';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

@Injectable()
export class LoadUsersEffectService {

  constructor(private  _action$: Actions, private  _db: DbService) { }

  @Effect() loadUser$: Observable<Action>= this._action$
    .ofType(LOAD_USERS_ACTION)
    .switchMap(
      () => this._db.fetchData()
    )
    .map(usersData => new LoadedUsersAction(usersData));

}
