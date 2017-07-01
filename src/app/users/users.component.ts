import {Component, OnInit} from '@angular/core';
import {ApplicationState} from '../store/application-state';
import {Store} from '@ngrx/store';
import {LoadUsersAction} from '../store/actions';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user$: Observable<User[]>;

  constructor(private _store: Store<ApplicationState>) {
    this.user$ = _store.select(state => state.usersStore.users);
  }

  ngOnInit() {
    this._store.dispatch(new LoadUsersAction());
  }

}
