import {combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeReducer} from './store/store-reducer';

export const reducer = compose(combineReducers)({storeReducer});
