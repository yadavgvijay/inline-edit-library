import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { RocketEditModule } from 'dist/rocket-edit';
import { RocketEditModule } from 'projects/rocket-edit/src/lib/rocket-edit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RocketEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
