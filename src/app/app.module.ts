import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { routing } from './app.routing';
import { Stage1Component } from './stage1/stage1.component';
import { Stage2_1Component } from './stage2.1/stage2.1.component';
import { Stage2_2Component } from './stage2.2/stage2.2.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    Stage1Component,
    Stage2_1Component, Stage2_2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
