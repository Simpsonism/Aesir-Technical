import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Titles } from './titles/titles.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: Titles },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    Titles
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
