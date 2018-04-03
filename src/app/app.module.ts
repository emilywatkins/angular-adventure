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
import { Stage3_1Component } from './stage3-1/stage3-1.component';
import { Stage3_2Component } from './stage3-2/stage3-2.component';
import { Stage3_3Component } from './stage3-3/stage3-3.component';
import { Stage3_4Component } from './stage3-4/stage3-4.component';


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
    Stage2_1Component, Stage2_2Component, Stage3_1Component, Stage3_2Component, Stage3_3Component, Stage3_4Component
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
