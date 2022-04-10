import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementCardComponent } from './components/element-card/element-card.component';
import { ElementComponent } from './components/element/element.component';
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementCardComponent,
    ElementComponent,
    PeriodicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
