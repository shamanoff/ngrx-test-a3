import {Action} from '@ngrx/store';
import {UsersStore} from './users-store';


export const LOADED_USERS_ACTION = 'LOADED_USERS_ACTION';
export const LOAD_USERS_ACTION = 'LOAD_USERS_ACTION';

export class LoadedUsersAction implements Action {

  readonly type = LOADED_USERS_ACTION;
  constructor(public payload?: UsersStore ) {}
}
export class LoadUsersAction implements Action {

  readonly type = LOAD_USERS_ACTION;

}