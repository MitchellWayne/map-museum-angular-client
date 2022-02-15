import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { HeaderSearchbarComponent } from './components/header/header-searchbar/header-searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
