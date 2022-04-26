import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { UnderHeaderComponent } from './under-header/under-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    UnderHeaderComponent
  ],
  imports: [
    BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
