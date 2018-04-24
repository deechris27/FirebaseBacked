import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD9awYg5cN8afWcTz3krbDaCvj2r0rWVy0",
  authDomain: "chatapp-1d86a.firebaseapp.com",
  databaseURL: "https://chatapp-1d86a.firebaseio.com",
  projectId: "chatapp-1d86a",
  storageBucket: "chatapp-1d86a.appspot.com",
  messagingSenderId: "795342121605"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
