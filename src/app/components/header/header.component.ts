import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Series } from 'src/app/interfaces/Series';

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

  searchQuery!: string;
  searchQuerySubscription!: Subscription;

  infoboxActive: boolean = false;
  infoboxActiveSubscription!: Subscription;

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

    this.infoboxActiveSubscription = this.uiService.onInfoboxActive().subscribe(
      value => {
        this.infoboxActive = value;
      }
    );

    this.seriesSubscription = this.uiService.onSeriesListUpdate().subscribe(
      value => {
        this.seriesList = value;
      }
    );
  }

  ngOnInit(): void {

  }

  updateSearch(updatedQuery: string) {
    this.uiService.updateSearchQuery(updatedQuery);
    this.uiService.setSearchActive(this.searchQuery !== "");
    if (this.searchQuery === "") this.uiService.setInfoboxActive(false);

    console.log(this.searchActive + ":" + this.searchQuery);
  }

  executeSearch() {
    this.uiService.setInfoboxActive(this.searchQuery !== "");
    this.uiService.getSeriesList();
    setTimeout(() => {console.log(this.seriesList)}, 1000);
  }
}
