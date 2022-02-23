import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Series } from 'src/app/interfaces/Series';
import { Note } from 'src/app/interfaces/Note';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  seriesList: Series[] = [];
  seriesSubscription!: Subscription;

  searchActive: boolean = false;
  searchActiveSubscription!: Subscription;

  searchQuery: string = "";
  searchQuerySubscription!: Subscription;

  activeSeries!: Series;
  actSeriesSubscription!: Subscription;

  activeNote!: Note;
  actNoteSubscription!: Subscription;

  constructor(
    private uiService: UiService,
  )
  { 
    this.searchActiveSubscription = this.uiService.onSearchActive().subscribe(
      value => { 
        this.searchActive = value;
      }
    );

    this.searchQuerySubscription = this.uiService.onUpdateSearchQuery().subscribe(
      value => {
        this.searchQuery = value;
      }
    );

    // this.infoboxActiveSubscription = this.uiService.onInfoboxActive().subscribe(
    //   value => {
    //     this.infoboxActive = value;
    //   }
    // );

    this.seriesSubscription = this.uiService.onSeriesListUpdate().subscribe(
      value => {
        this.seriesList = value;
      }
    );

    this.actSeriesSubscription = uiService.onUpdateActiveSeries().subscribe( 
      value => {
        this.activeSeries = value;
      }
    );

    this.actNoteSubscription = uiService.onUpdateActiveNote().subscribe( 
      value => {
        this.activeNote = value;
      }
    );
  }

  ngOnInit(): void {

  }

  updateSearch(updatedQuery: string) {
    this.uiService.updateSearchQuery(updatedQuery);
    this.uiService.setSearchActive(this.searchQuery !== "");
    this.uiService.clearActives();
    if (this.searchQuery === "") this.seriesList = [];
  }

  executeSearch() {
    if (this.searchQuery !== ""){
      // this.uiService.setInfoboxActive(true);
      this.uiService.getSeriesList();
    } else {
      // this.uiService.setInfoboxActive(false);
      this.seriesList = [];
    }
      }
}
