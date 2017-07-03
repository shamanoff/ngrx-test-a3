import {Component, OnInit} from '@angular/core';
import {ApplicationState} from '../store/application-state';
import {Store} from '@ngrx/store';
import {LoadUsersAction} from '../store/actions';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import * as _ from 'lodash';
import 'rxjs/add/operator/skip';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user$: Observable<User[]>;
  constructor(private _store: Store<ApplicationState>) {
    this.user$ = _store
      .skip(1)
      .map(state => state.usersStore.users);
/*    this.user$ = _store
      .select(
        'users'
      );*/
     console.log('---------constructor---------');
     console.log(this.user$ + 'TEST')
  }
/*  mapU(state:ApplicationState){

    return state.usersStore;
  }*/

  ngOnInit() {

    this._store.dispatch(new LoadUsersAction());
    console.log('----------dispatching---------');


  }

}
