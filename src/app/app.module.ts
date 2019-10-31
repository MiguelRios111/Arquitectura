import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { Route1Component } from './components/route1/route1.component';
import { RegistryComponent } from './components/registry/registry.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { AuthService} from './services/auth.service';
import { FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import {AgmCoreModule} from '@agm/core';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    PrivateComponent,
    NotFoundPageComponent,
    Route1Component,
    RegistryComponent,
    DriversComponent
  ],
  imports: [



    BrowserModule,
    AppRoutingModule,
  FormsModule,
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    
}),

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
