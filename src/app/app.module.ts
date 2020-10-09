import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as $ from 'jquery';
// angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GraficoComponent } from './components/grafico/grafico.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { HeadComponent } from './components/head/head.component';
import { HeadModule } from './components/head/head.module';
import { PrefacturaComponent } from './components/prefactura/prefactura.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GraficoComponent,
    RegistrosComponent,
    HeadComponent,
    PrefacturaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeadModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    FontAwesomeModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
