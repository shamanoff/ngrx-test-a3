import {INITIAL_USERS_STORE_STATE, UsersStore} from './users-store';

export interface ApplicationState {
  usersStore: UsersStore;
}
export const INITIAL_APP_STATE: ApplicationState = {

  usersStore: INITIAL_USERS_STORE_STATE
};
