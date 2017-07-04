import {Action} from '@ngrx/store';
import {User} from "../model/user";


export const LOAD_USERS_ACTION = 'LOAD_USERS_ACTION';
export const LOADED_USERS_ACTION = 'LOADED_USERS_ACTION';
export const DELETE_USER_ACTION = 'DELETE_USER_ACTION';
export const DELETED_USER_ACTION = 'DELETED_USER_ACTION';
export const EDIT_USER_ACTION = 'EDIT_USER_ACTION';
export const EDITED_USER_ACTION = 'EDITED_USER_ACTION';
export const ADD_USER_ACTION = 'ADD_USER_ACTION';
export const ADDED_USER_ACTION = 'ADDED_USER_ACTION';

export class LoadUsersAction implements Action {
  readonly type = LOAD_USERS_ACTION;
}
export class LoadedUsersAction implements Action {
  readonly type = LOADED_USERS_ACTION;
  constructor(public payload? ) {}
}
export class DeleteUserAction implements Action {
  readonly type = DELETE_USER_ACTION;
}
export class DeletedUserAction implements Action {
  readonly type = DELETED_USER_ACTION;
  constructor(public payload: number) {}
}
export class EditUserAction implements Action {
  readonly type = EDIT_USER_ACTION;
}
export interface EditedPayload {
  id: number;
  user: User;
}
export class EditedUserAction implements Action {
  readonly type = EDITED_USER_ACTION;
  constructor(public payload?: EditedPayload ) {}
}
