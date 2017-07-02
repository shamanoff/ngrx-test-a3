import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {User} from '../model/user';

@Injectable()
export class FireService {
  fireUser$: FirebaseListObservable<User[]>;
  constructor(private _db: AngularFireDatabase) { }

  getUsers(){
    this.fireUser$ = this._db.list('/users')as FirebaseListObservable<User[]>;
    return this.fireUser$;
  }

}
