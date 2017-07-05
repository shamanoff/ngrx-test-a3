import {Action} from '@ngrx/store';
import {ApplicationState, INITIAL_APP_STATE} from './application-state';
import {
  DELETED_USER_ACTION, DeletedUserAction, LOADED_USERS_ACTION,
  LoadedUsersAction
} from './actions';

// import {StoreData} from '../store-data';
import * as _ from 'lodash';

export function storeReducer(state: ApplicationState = INITIAL_APP_STATE,
                             action: Action): ApplicationState {
  switch (action.type) {
    case LOADED_USERS_ACTION:
      return handleLoadedUsersAction(state, <any>action);
    case DELETED_USER_ACTION:
      return state;
      // return handleDeletedUserAction(state, <any>action);
    default:
      return state;
  }
}

function handleLoadedUsersAction(state: ApplicationState,
                                 action: LoadedUsersAction): ApplicationState {
  const newState: ApplicationState = Object.assign({}, state);
  newState.usersStore = action.payload;
  // console.log(JSON.stringify(newState.usersStore) + ' ---------SENDING--------- ');
  return newState;
}
/*
function handleDeletedUserAction(state: ApplicationState,
                                 action: DeletedUserAction): ApplicationState {
  const newState: ApplicationState = Object.assign({}, state);
  newState.usersStore.users = _.remove(newState.usersStore.users, action.payload);
  console.log(action.payload + ' ---------SENDING--------- ');

  return newState;
}
*/
