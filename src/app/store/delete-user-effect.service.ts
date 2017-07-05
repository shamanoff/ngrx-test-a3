import { Injectable } from '@angular/core';
import {FireService} from '../services/fire.service';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import { DELETED_USER_ACTION} from './actions';

@Injectable()
export class DeletedUserEffectService {

  constructor(private  _action$: Actions, private  _db: FireService) { }
  @Effect() deleteUser$: Observable<any>= this._action$
    .ofType(DELETED_USER_ACTION)
    .switchMap(action => this._db.deleteUser(action.payload));

}
