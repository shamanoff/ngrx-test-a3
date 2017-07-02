import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducer} from './reducer';
import {StoreModule} from '@ngrx/store';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';
import {DbService} from './services/db.service';
import {LoadUsersEffectService} from './store/load-users-effect.service';
import {EffectsModule} from '@ngrx/effects';
import {AngularFireModule} from 'angularfire2';
import {FireService} from './services/fire.service';
import {INITIAL_APP_STATE} from './store/application-state';
import {AngularFireDatabaseModule} from "angularfire2/database";
export const firebaseConfig = {
  apiKey: 'AIzaSyDYKHWgd09uq3NRIKx5Z8v8Un94pUcN1v0',
  authDomain: 'magazin-eb336.firebaseapp.com',
  databaseURL: 'https://magazin-eb336.firebaseio.com',
  projectId: 'magazin-eb336',
  storageBucket: 'magazin-eb336.appspot.com',
  messagingSenderId: '886636162748'
};
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer, INITIAL_APP_STATE),
    EffectsModule.run(LoadUsersEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

  ],
  providers: [DbService, FireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
