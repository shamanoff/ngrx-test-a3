import {Component, Input, Output} from '@angular/core';
import {User} from '../model/user';
import {DeletedUserAction, EditUserAction} from '../store/actions';
import {ApplicationState} from '../store/application-state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'user',
  template: `
    <h4>User Name: {{user.name }}</h4>
    <p>Id: {{user.id}}</p>
    <!--<p class="button hollow" (click)="onEditUser(user.id, user)" >Edit</p>-->
    <p class="button hollow" (click)="onDeleteUser(user)" >Delete</p>

  `,
  styles: [`
  `]
})
export class UserComponent {

  @Input() user: User;
constructor(private _store: Store<ApplicationState>){}
/*  onEditUser(id: number, user: User){
    this._store.dispatch(new EditUserAction());
  }*/
  onDeleteUser(user: User){
    this._store.dispatch(new DeletedUserAction(user));
    // this._store.dispatch(new DeletedUserAction(id));
  }

}
