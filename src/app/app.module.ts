import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {environment} from "../environments/environment";
import { ChatComponentComponent } from './core/chat-component/chat-component.component';
import {ChatRepositoryService} from "./core/chat-repository.service";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ChatRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
