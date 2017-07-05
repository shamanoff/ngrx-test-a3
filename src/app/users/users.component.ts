import {Component, OnInit} from '@angular/core';
import {ApplicationState} from '../store/application-state';
import {Store} from '@ngrx/store';
import {DeleteUserAction, EditUserAction, LoadUsersAction} from '../store/actions';
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
    this.user$ = _store.select('usersStore');
    _store.subscribe(
      state => console.log('Log ', state.usersStore)
    );
  }

  ngOnInit() {
    this._store.dispatch(new LoadUsersAction());

  }

  editUser(id: number, user: User){
    this._store.dispatch(new EditUserAction());
  }
  deleteUser(id: number){
    this._store.dispatch(new DeleteUserAction())
  }
}
