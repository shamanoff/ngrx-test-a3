import {Component, OnInit} from '@angular/core';
import {ApplicationState} from '../store/application-state';
import {Store} from '@ngrx/store';
import {LoadUsersAction} from '../store/actions';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
// import * as _ from 'lodash';
import 'rxjs/add/operator/skip';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user$: Observable<User[]>;
  constructor(private _store: Store<ApplicationState>) {
    console.log(this.user$ + 'LOG');

    this.user$ = _store.select(state => state.usersStore.users);
  /*  this._store
     .skip(1)
     .subscribe(
     state => console.log(' SUB ' + state.usersStore )
     );*/
     console.log('---------constructor---------');
     console.log(this.user$)

  }

  ngOnInit() {

    this._store.dispatch(new LoadUsersAction());
    console.log('----------dispatching---------');

  /*  this._store
      .skip(1)
      .subscribe(
      state => console.log(' SUB ' + state )
    )*/
  }

}
