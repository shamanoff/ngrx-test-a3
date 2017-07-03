import { Injectable } from '@angular/core';
// import {DbService} from '../services/db.service';
import {Actions, Effect} from '@ngrx/effects';
import {LOAD_USERS_ACTION, LoadedUsersAction} from './actions';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {FireService} from '../services/fire.service';

@Injectable()
export class LoadUsersEffectService {

  constructor(private  _action$: Actions, private  _db: FireService) { }

  @Effect() loadUser$: Observable<Action>= this._action$
    .ofType(LOAD_USERS_ACTION)
    .switchMap(() => this._db.getUsers())
    .map(usersData => new LoadedUsersAction(usersData));

}
