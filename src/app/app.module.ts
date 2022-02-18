import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { HeaderSearchbarComponent } from './components/header/header-searchbar/header-searchbar.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderInfoboxComponent } from './components/header/header-infobox/header-infobox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    HeaderSearchbarComponent,
    HeaderLogoComponent,
    HeaderInfoboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
