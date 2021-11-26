import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdolsComponent } from './idols/idols.component';
import { IdolDetailsComponent } from './idol-details/idol-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { IdolSearchComponent } from './idol-search/idol-search.component';
import { environment } from '../environments/environment';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyDssPwU9kAwgtMaVyMI3EuShh5zXe1Sxao",
  authDomain: "tourofthekpopidols-6a6d3.firebaseapp.com",
  projectId: "tourofthekpopidols-6a6d3",
  storageBucket: "tourofthekpopidols-6a6d3.appspot.com",
  messagingSenderId: "298434638572",
  appId: "1:298434638572:web:81e33c2f0261bbd71dabc9"
};

@NgModule({
  declarations: [
    AppComponent,
    IdolsComponent,
    IdolDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    IdolSearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
