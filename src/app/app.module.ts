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
    StoreModule.provideStore(reducer),
    EffectsModule.run(LoadUsersEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
