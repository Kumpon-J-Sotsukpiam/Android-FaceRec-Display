import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AuthTokenHttpInterceptorProvider } from './providers/auth-token.intercaptor'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// graphQL
// import {HttpClientModule} from '@angular/common/http';
// import { APOLLO_OPTIONS } from 'apollo-angular';
// import { HttpLink } from 'apollo-angular/http';
// import { InMemoryCache } from '@apollo/client/core';

@NgModule({
  imports: [
    // import firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxDatatableModule,
    // import init
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, AngularFirestoreModule, AuthTokenHttpInterceptorProvider
    //   {
    //   provide: APOLLO_OPTIONS,
    //   useFactory: (httpLink: HttpLink) => {
    //     return {
    //       cache: new InMemoryCache(),
    //       link: httpLink.create({
    //         uri: 'http://localhost:3000/graphiql'// 'https://48p1r2roz4.sse.codesandbox.io',
    //       }),
    //     };
    //   },
    //   deps: [HttpLink],
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
