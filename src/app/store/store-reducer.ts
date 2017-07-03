import {Action} from '@ngrx/store';
import {ApplicationState, INITIAL_APP_STATE} from './application-state';
import {LOADED_USERS_ACTION, LoadedUsersAction} from './actions';

// import {StoreData} from '../store-data';
// import * as _ from 'lodash';

export function storeReducer(state: ApplicationState = INITIAL_APP_STATE,
                             action: Action): ApplicationState {
  switch (action.type) {
    case LOADED_USERS_ACTION:
      return handleLoadedUsersAction(state, <any>action);
    default:
      return state;
  }
}

function handleLoadedUsersAction(state: ApplicationState, action: LoadedUsersAction): ApplicationState {
  const newState: ApplicationState = Object.assign({}, state);
  newState.usersStore = action.payload;
  // console.log(JSON.stringify(newState.usersStore) + ' ---------SENDING--------- ');
  return newState;
}
