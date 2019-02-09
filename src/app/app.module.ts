import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from './shared/material/material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './404/404.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    SharedMaterialModule,
    HomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    NotFoundModule,
    AppRoutingModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
