import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LisaKudrowComponent } from './lisa-kudrow/lisa-kudrow.component';
import { DomManipulationsComponent } from './dom-manipulations/dom-manipulations.component';
import { MattLeBlancComponent } from './matt-le-blanc/matt-le-blanc.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LisaKudrowComponent,
    MattLeBlancComponent,
    DomManipulationsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
