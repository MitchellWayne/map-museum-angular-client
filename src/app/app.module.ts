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
import { SerieslistComponent } from './components/header/header-infobox/serieslist/serieslist.component';
import { SeriesitemComponent } from './components/header/header-infobox/seriesitem/seriesitem.component';
import { SeriesdetailedComponent } from './components/header/header-infobox/seriesdetailed/seriesdetailed.component';
import { SeriesdetailedNoteitemComponent } from './components/header/header-infobox/seriesdetailed/seriesdetailed-noteitem/seriesdetailed-noteitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    HeaderSearchbarComponent,
    HeaderLogoComponent,
    HeaderInfoboxComponent,
    SerieslistComponent,
    SeriesitemComponent,
    SeriesdetailedComponent,
    SeriesdetailedNoteitemComponent
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
