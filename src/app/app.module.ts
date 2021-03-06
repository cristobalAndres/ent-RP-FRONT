import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { NavService } from './services/nav.service';
import { ProductsService } from './services/products.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


const firebaseConfig = {
  apiKey: 'AIzaSyCKZLi67SMcEvqlPjEquPI5vhFp0ZZjYJY',
  authDomain: 'auth-3b4ef.firebaseapp.com',
  databaseURL: 'https://auth-3b4ef.firebaseio.com',
  projectId: 'auth-3b4ef',
  storageBucket: 'auth-3b4ef.appspot.com',
  messagingSenderId: '319958118100',
  appId: '1:319958118100:web:b0b47d8e4d7e3f8e5a5541',
  measurementId: 'G-RXJBGS6PZV'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    NavComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [ AngularFireAuth, NavService, ProductsService, AngularFireAuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
