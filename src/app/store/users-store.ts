import {User} from '../model/user';

export interface UsersStore {
  users: User[];
}
export const INITIAL_USERS_STORE_STATE: UsersStore = {
  users:[]
};
